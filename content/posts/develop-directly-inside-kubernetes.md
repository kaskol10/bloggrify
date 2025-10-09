---
id: "develop-software-direclty-inside-kubernetes"
title: "Develop software directly inside Kubernetes"
description: "Develop software in your Kubernetes cluster"
date: "2025-10-16"
categories:
  - engineering
  - kubernetes
  - develop
  - devex
tags:
  - kubernetes
  - develop
  - devex 
cover: "covers/devspace.jpg"
---

# Motivation 

A lot of companies has issues developing apps from their laptop, sometimes because networking issues, permissions, access to databases, need of powerful instances... Likely you're reading and realize this is an issue in your company too. So, this article would focus in how to develop directly in Kubernetes from your local laptop. To make it happen, the solution to deep dive would be DevSpace, at the time this article has been written a Sandbox CNCF Project developed by Loft and donated to the CNCF in 2022, their mantra "it's the faster developer tool for Kubernetes". We'll see 

# Requirements 

What I need to use Devspace? Simple: 
- Kubernetes access in order to deploy your local projects to Kubernetes 
- DevSpace CLI downloaded in your laptop (it's available for Windows, Linux and Mac)
- Access to the image registry you've choosen. 

# Features 

- Streamlined workflow. Automate image building and automate deployments 
    - Builing images, pushing images
    - Kubectl, helm, kustomize, cross-repository dependencies 
- Faster feedback loop. Updates your container in real-time while you're coding 
    - 2-way file sync, sync between your local computer and the containers. What I need to do it? 
    - Hot reloading, rebuilds your app inside the running container. This is achieved through file synchronization and auto-reloading mechanisms 
    - Advanced build caching, prevents unnecesary builds and accelerate image building
- Rich UI 
    - Easy interaction with your workloads 
- Developer experience. Works with your favourite IDE and other developer tools 
- Cross-environment consistency 
    - Declarative configuration => GitOps! 
    - Profiles and config patches 
    - Config variables 
    - Custom commands 

# Highlights 

## Try a Helm Chart in the manifests

The sample here is how to use the Helm chart properly, although you can start from scratch using vanilla Kubernetes manifests, you can start using a Helm Chart defined for your company. 


```sh
deployments:
  hello-devspace:
    helm: 
      chart: 
        name: component-chart
        repo: https://charts.devspace.sh
      values:
        labels:
          app: devspace-example-python-simple
        containers:
        - name: python-web-server
          image: "python-hello-devspace"
          ports:
            - containerPort: 80
        nodeSelector:
          dedicated: amd
        tolerations:
        - effect: NoSchedule
          key: dedicated
          operator: Equal
          value: amd
```
Or if you prefer to load an inline file you can do it easily too, take into account this is loaded as a static configuration so in case is something dynamic you need to refer as `values` and you can combine `values` and `valuesFiles`
```sh
deployments:
  hello-devspace:
    helm: 
      chart: 
        name: component-chart
        repo: https://charts.devspace.sh
      valuesFiles:
        - manifests/values.yaml
```


## Hot Reloading Implementation

DevSpace provides two main mechanisms for hot reloading in Kubernetes development:

### 1. File Synchronization (Real-time Sync)

File synchronization is the primary method for hot reloading. It syncs local file changes directly into running containers without rebuilding images or restarting containers.

**Configuration in `devspace.yaml`:**

```yaml
dev:
  sync:
    - imageSelector: your-app-image
      localSubPath: ./
      containerPath: /app
      excludePaths:
        - node_modules/
        - logs/
        - .git/
        - dist/
```

**Key parameters:**
- `imageSelector`: Matches containers by image name
- `localSubPath`: Local directory to sync (usually project root)
- `containerPath`: Destination path inside the container
- `excludePaths`: Files/directories to exclude from sync

**How it works:**
1. Run `devspace dev` to start development mode
2. DevSpace establishes real-time file sync between local machine and container
3. Any local file changes are immediately reflected in the running container
4. If your application supports hot reloading (e.g., `nodemon` for Node.js, `--reload` for Python), changes are automatically picked up

### 2. Auto-Reloading (Full Rebuild)

For changes that require complete rebuilds (like dependency changes), DevSpace offers auto-reloading:

```yaml
dev:
  autoReload:
    paths:
      - ./package.json
      - ./requirements.txt
      - ./Dockerfile
      - ./config/*
    images:
      - your-app-image
    deployments:
      - your-deployment-name
```

**When to use auto-reload:**
- Dependency changes (`package.json`, `requirements.txt`)
- Configuration file modifications
- Dockerfile changes
- Environment variable updates

### 3. Language-Specific Examples

**Node.js/React:**
```yaml
dev:
  sync:
    - imageSelector: node-app
      localSubPath: ./
      containerPath: /app
      excludePaths:
        - node_modules/
        - build/
        - dist/
  autoReload:
    paths:
      - ./package.json
      - ./package-lock.json
```

**Python:**
```yaml
dev:
  sync:
    - imageSelector: python-app
      localSubPath: ./
      containerPath: /app
      excludePaths:
        - __pycache__/
        - .venv/
        - venv/
  autoReload:
    paths:
      - ./requirements.txt
      - ./pyproject.toml
```

**Go:**
```yaml
dev:
  sync:
    - imageSelector: go-app
      localSubPath: ./
      containerPath: /app
      excludePaths:
        - vendor/
        - bin/
  autoReload:
    paths:
      - ./go.mod
      - ./go.sum
```

### 4. Advanced Configuration

**Bidirectional sync:**
```yaml
dev:
  sync:
    - imageSelector: your-app
      localSubPath: ./
      containerPath: /app
      uploadExcludePaths:
        - node_modules/
      downloadExcludePaths:
        - logs/
```

**Multiple sync paths:**
```yaml
dev:
  sync:
    - imageSelector: frontend
      localSubPath: ./frontend
      containerPath: /app/frontend
    - imageSelector: backend
      localSubPath: ./backend
      containerPath: /app/backend
```

## Debugging Python


To connect a debugger in your IDE (such as Visual Studio Code) to the setup you've configured in `devspace.yaml`, you'll need to set up a debugging configuration. Here's how you can do it:
Steps to Connect the Debugger
- Install Debugger Extension: Ensure you have the Python extension installed in your IDE, which typically includes debugging capabilities.
- Create a Debug Configuration:
Open the command palette in your IDE (usually Cmd+Shift+P on macOS or Ctrl+Shift+P on Windows/Linux).
    - Type "Debug: Open launch.json" and select it. This will open or create a launch.json file in the .vscode directory.
- Add a Debug Configuration:
Add a new configuration for Python remote debugging. Here is an example configuration you can add to your launch.json:
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Python: Remote Attach",
            "type": "debugpy",
            "request": "attach",
            "connect": {
                "host": "localhost",
                "port": 5678
            },
            "pathMappings": [
                {
                    "localRoot": "${workspaceFolder}/02-fastapi-tortoise/backend/devspace_starwars_api",
                    "remoteRoot": "/simple-project/devspace_starwars_api"
                }
            ],
            "justMyCode": true
        }
    ]
}
```

    - host: This should be localhost since you're connecting to the local port exposed by devspace.
    - port: This should match the port you exposed for debugging (5678).
    - pathMappings: This maps the local source code directory to the remote directory in the container. Adjust the paths if your directory structure is different.
- Start Debugging:
Start your application using devspace dev.
In your IDE, go to the Run and Debug view and select "Python: Remote Attach" from the dropdown, then click the green play button to start debugging.
This setup will allow you to set breakpoints and step through your code as it runs in the container

## Build the image without Docker running in your instance 


The limitation of build the project in the local instance is usually a concern for networking and limited resources in the pc. 

DevSpace, combined with Kaniko, provides a powerful solution for building and deploying applications in Kubernetes without relying on Docker installed on local machines.

- **No Local Docker Required**: By using Kaniko, you can build images directly in the cloud, eliminating the need for Docker to be installed locally.
- **Streamlined Development**: DevSpace automates the deployment process, allowing developers to focus on coding rather than managing local Docker environments.
- **Consistent Environments**: Ensures that builds are consistent across different environments by using the same Kubernetes cluster for development and production.

### How It Works
1. **DevSpace Setup**: Configure DevSpace to manage your Kubernetes deployments and automate the development workflow.
2. **Kaniko Integration**: Use Kaniko to build container images within the Kubernetes cluster, leveraging cloud resources.
3. **Deploy and Test**: With DevSpace, deploy your application and test it in a cloud environment, ensuring that it behaves the same as it would in production.

This approach not only simplifies the development process but also enhances security and scalability by leveraging cloud-native tools and practices.