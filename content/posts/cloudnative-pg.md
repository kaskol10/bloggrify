---
id: "cloudnative-pg"
title: "Cloudnative-PG: A Hands-On Guide to migrate from Postgresql to Cloudnative-pg"
description: "How to migrate from a Bitnami Postgresql to Cloudnative-pg"
date: "2025-08-27"
categories: 
  - engineering 
tags:
  - bitnami
  - kubernetes
  - cloudnative-pg
  - cloud-native
  - postgresql
cover: "covers/kagent.png"
---


## Motivation

[This issue](https://github.com/bitnami/charts/issues/35164) is the main motivation of this post, and the start of thinking about some alternatives to allocate PostgreSQL databases on Kubernetes. 

Bitnami changed their Helm Chart catalog and the production ready containers and helm charts would be available under a payroll. So, I advocate for open source, and it looks like I'd need a new alternative to all the PostgreSQL databases deployed on Kubernetes. 

Navigating to the CNCF a promise Operator appeared, [Cloudnative-PG](https://cloudnative-pg.io/), the documentation looks pretty extensive, role definitions in code, auto "data-migration" from a PostgreSQL, Grafana dashboards... awesome project. CloudNativePG was accepted to CNCF on January 21, 2025 at the Sandbox maturity level.

Although the impact of this bitnami license change it would be huge, I would like to focus on PostgreSQL because `PostgreSQL debuted in the developer survey in 2018 when 33% of developers reported using it, compared with the most popular option that year: MySQL, in use by 59% of developers. Six years later, PostgreSQL is used by 49% of developers and is the most popular database for the second year in a row.` from [StackOverflow Developer Survey 2024](https://survey.stackoverflow.co/2024/), so I have a postgreSQL database 





## Getting Started

Easy! Deploy the CRDs, then start deploying databases :) 

```sh
kubectl apply --server-side -f \
  https://raw.githubusercontent.com/cloudnative-pg/cloudnative-pg/release-1.27/releases/cnpg-1.27.0.yaml
```

Remember to apply server side because the manifest is too long and you could have issues with your favourite GitOps tool, ArgoCD for instance.

## Setup


```yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgres
spec:
  managed:
    roles:
    - name: test
      ensure: present
  instances: 3
  imageName: ghcr.io/cloudnative-pg/postgresql:17.5
  externalClusters: # Create the reference for the external cluster
  - name: source-db
    connectionParameters:
      host: test-postgresql-ha-pgpool.test.svc.cluster.local # Using K8s DNS
      user: postgres
      sslmode: disable
      dbname: test
    password: # Use the password located in my secret test-postgresql
      name: test-postgresql
      key: PASSWORD
  bootstrap:
    initdb: # Automatic migration 
      database: test
      owner: test
      import:
        type: microservice # Only that database for the postgresql
        databases:
          - test
        source:
          externalCluster: source-db

  enableSuperuserAccess: true 
  storage:
    size: 8Gi
    storageClass: gp3
  resources:
    requests:
      cpu: 100m
      memory: 128Mi
    limits:
      cpu: 1000m
      memory: 1Gi
---
apiVersion: postgresql.cnpg.io/v1
kind: Pooler # Because I'm going to use it in HA
metadata:
  name: "pooler-postgres"
spec:
  cluster: 
    name: postgres
  instances: 2
  pgbouncer: 
    poolMode: session
  type: rw
---
apiVersion: monitoring.coreos.com/v1
kind: PodMonitor 
metadata:
  annotations:
    cnpg.io/operatorVersion: 1.27.0
  labels:
    cnpg.io/cluster: postgres
    release: kube-prometheus-stack # I need this label to allow Prometheus scrape metrics.
  name: postgres
spec:
  namespaceSelector: {}
  podMetricsEndpoints:
  - bearerTokenSecret:
      key: ""
      name: ""
    port: metrics
  selector:
    matchLabels:
      cnpg.io/cluster: postgres
      cnpg.io/podRole: instance
```



## Summary

Caveats
- Adding labels to the podMonitor. Usually the podMonitor has extra labels to make it work in Prometheus, default case for kube-prometheus-stack would be 
```sh
labels: 
  release: kube-prometheus-stack
```
but you could have your own value. 
- Documentation about externalSecrets it's a little bit weird, I missed the ability to add a custom key instead of the secret and hardcode "username" and "password" keys as the only option

Right now, I did a YOLO and migrate the PostgreSQL databases relying in everything would be ok, we'll see in the next days... an upcoming post would be written if the migration is not as good as I thought

## Resources

- [CloudNativePG](https://cloudnative-pg.io/)

## About the Author

I'm a Platform Engineer Architect specializing in cloud-native technologies and engineering leadership. I focus on building efficient, collaborative engineering processes and documentation. I'm a Golden Kubestronaut with a passion for Cloud Native technologies.

[Connect with me on LinkedIn](https://www.linkedin.com/in/ramiroalvfer/) or [contact me](/contact) for more information.

