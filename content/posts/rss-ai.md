---
id: "progressive-delivery-kubernetes"
title: "Progressive Delivery in Kubernetes: A Comprehensive Analysis"
description: "Building a Privacy-First RSS Reader with AI Summaries"
date: "2025-11-23∂"
categories:
  - open-source
  - self-hosted
tags:
  - self-hosted
  - privacy
  - vibe-coding
cover: ""

---

# Building a Privacy-First RSS Reader with AI Summaries

*Published: [Date]* | *Reading time: ~12 minutes*

In today's AI-driven world, information overload is a real problem. As someone who follows Hacker News, Kubernetes blogs, GitHub updates, and various indie developer RSS feeds, I found myself drowning in content. The challenge wasn't finding information—it was filtering what truly mattered.

This is the story of how I built **RSS AI Reader**, a privacy-first, self-hosted RSS reader with AI-powered summaries that runs entirely on my infrastructure, using Small Language Models (SLMs) for sustainable AI processing.

## The Problem: Information Overload in the AI Era

Every day, I'm bombarded with RSS feeds from multiple sources:
- Hacker News for tech discussions
- Kubernetes and cloud-native blogs
- GitHub blog updates
- Indie developer newsletters

The traditional approach—reading everything—isn't sustainable. I needed a way to:
1. **Filter** content intelligently
2. **Summarize** articles quickly (20-word summaries to decide if I want to read more)
3. **Maintain privacy** (no data collection, no tracking)
4. **Self-host** everything (no cloud dependencies, no API keys for simple summaries)
5. **Use sustainable AI** (Small Language Models that run on consumer hardware)

After reading [research on Small Language Models](https://arxiv.org/abs/2506.02153), I was convinced: for simple summarization tasks, you don't need GPT-4. A 1-3B parameter model running locally is more than sufficient—and it's completely private.

## Why Not Use Existing Solutions?

I evaluated several existing RSS readers:

- **RSS.app**: Not private—requires account, tracks usage, data collection
- **Miniflux**: Great RSS reader, but lacks AI summarization capabilities
- **Other solutions**: Either too complex, require cloud APIs, or compromise on privacy

So I decided to build my own. With a strong background in backend/platform engineering but limited frontend experience, this was the perfect opportunity to leverage modern AI coding assistants—specifically [Cursor](https://cursor.sh)—to build something from scratch.

## Architecture: Privacy-First, Self-Hosted

The RSS AI Reader is built with a clear architecture philosophy:

```
┌─────────────────────────────────────────────────────────┐
│                    Browser (Client)                      │
│  ┌──────────────────────────────────────────────────┐  │
│  │  React Frontend (Vite + TypeScript)              │  │
│  │  - All data stored in browser localStorage        │  │
│  │  - No tracking, no analytics                     │  │
│  │  - Privacy-first design                           │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                        │
                        │ HTTP Requests
                        ▼
┌─────────────────────────────────────────────────────────┐
│              Your Infrastructure                         │
│  ┌──────────────┐  ┌──────────────┐                     │
│  │   Frontend   │  │    Proxy     │                     │
│  │   (nginx)    │  │  (Express)   │                     │
│  │              │  │              │                     │
│  │  - Serves    │  │  - RSS Feed  │                     │
│  │    static    │  │    Proxy     │                     │
│  │    assets    │  │  - CORS      │                     │
│  │              │  │    handling  │                     │
│  └──────────────┘  └──────────────┘                     │
│         │                  │                            │
│         └──────────────────┘                            │
└─────────────────────────────────────────────────────────┘
                        │
                        │ Direct Connection
                        ▼
┌─────────────────────────────────────────────────────────┐
│              AI Model Providers                           │
│  ┌──────────────┐                                        │
│  │   Ollama     │                                        │
│  │  (Local)     │                                        │
│  │              │                                        │
│  │  - gemma3:1b │                                        │
│  │  - phi3:mini │                                        │
│  │  - granite4  │                                        │
│  └──────────────┘                                        │
└─────────────────────────────────────────────────────────┘
```

### Key Architectural Decisions

#### 1. **Privacy-First Design**
- **Browser-side storage**: All feeds, prompts, and settings stored in `localStorage`
- **No backend database**: No user accounts, no data collection
- **Anonymous AI requests**: AI summaries don't include any user identification
- **Privacy utilities**: Automatic removal of tracking pixels, URL parameter stripping, referrer policy enforcement

#### 2. **Self-Hosted AI Processing**
The application uses **Ollama** for local AI processing:
- **100% private**: All AI processing happens on your infrastructure
- **No API keys required**: No external services, no data leaves your control
- **Small Language Models**: Efficient models that run on consumer hardware
- **Flexible**: Easy to switch models or add cloud providers later

#### 3. **Content Security Policy (CSP) Compliance**
All requests go through same-origin proxy endpoints to avoid CSP violations:
- `/api/proxy` for RSS feeds
- `/api/ollama-proxy` for Ollama requests (when needed)

## Technology Stack

### Frontend
- **React 18** + **TypeScript** for type safety
- **Vite** for fast builds and HMR
- **Tailwind CSS** for styling (Hacker News-inspired design)
- **Vite environment variables** for build-time configuration

### Backend
- **Express.js** proxy server for RSS feeds and AI requests
- **Rate limiting** with TTL-based cleanup
- **SSRF protection** for security
- **Graceful shutdown** handling

### AI Integration
- **Ollama** for local AI models (gemma3:1b, phi3:mini, granite4)
- **Direct API integration** - no external dependencies
- **Flexible architecture** - easy to add other providers later

### Infrastructure
- **Docker Compose** for local development
- **Self-hosted** - runs on your infrastructure
- **Nginx** for frontend serving and API proxying

## Development Experience: "Vibe Coding" with Cursor

As someone with limited frontend experience, building this project was a perfect test case for AI-assisted development. Using [Cursor](https://cursor.sh), I was able to:

1. **Iterate quickly**: Describe what I wanted, get code suggestions, refine
2. **Learn as I build**: Understand React patterns, TypeScript types, Vite configuration
3. **Focus on architecture**: Spend time on system design rather than syntax
4. **Maintain quality**: TypeScript catches errors, AI suggests best practices

The result? A production-ready application built in significantly less time than traditional development, with proper error handling, TypeScript types, and clean architecture.

## Privacy Features: Beyond the Basics

Privacy isn't just "no tracking"—it's comprehensive protection:

### ✅ Implemented Privacy Features

1. **Pixel Tracker Removal**: Automatically detects and removes 1x1 tracking pixels from RSS content
2. **URL Parameter Stripping**: Removes `utm_*`, `fbclid`, `gclid`, and 20+ tracking parameters
3. **Referrer Policy**: `no-referrer` headers prevent referrer leakage
4. **YouTube No-Cookie**: Automatically converts YouTube links to `youtube-nocookie.com`
5. **External Link Protection**: All external links use `rel="noopener noreferrer"`
6. **JavaScript Blocking**: Removes external scripts and dangerous HTML elements
7. **Content Security Policy**: Strict CSP headers prevent XSS attacks

### Privacy by Design

- **No user accounts**: Everything stored in browser
- **No analytics**: No Google Analytics, no tracking pixels
- **No data collection**: Not even error tracking (unless you self-host)
- **Self-hosted AI**: Local Ollama models mean your content never leaves your infrastructure

## Deployment: Simple and Self-Hosted

### Local Development (Docker Compose)

The simplest way to get started:

```yaml
services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile.frontend
      args:
        - VITE_AI_PROVIDER=ollama
        - VITE_OLLAMA_PROXY_URL=/api/ollama-proxy
        - VITE_OLLAMA_MODEL=gemma3:1b
    ports:
      - "3000:80"
    depends_on:
      - proxy

  proxy:
    build:
      context: .
      dockerfile: Dockerfile.proxy
    environment:
      - OLLAMA_API_URL=http://host.docker.internal:11434
    ports:
      - "3001:3001"
```

### Quick Start

1. **Install Ollama** on your host machine: https://ollama.ai
2. **Pull a model**: `ollama pull gemma3:1b`
3. **Start with Docker Compose**: `docker-compose up -d`
4. **Access**: http://localhost:3000

That's it! The application runs entirely on your infrastructure, with Ollama processing AI requests locally.


## AI Model Strategy: Small Models for Big Impact

The research on Small Language Models ([arxiv.org/abs/2506.02153](https://arxiv.org/abs/2506.02153)) shows that for simple tasks like summarization, you don't need massive models. My testing confirmed this:

### Recommended Models for Local Processing

- **gemma3:1b** (1GB): Fast, good quality for summaries - my go-to choice
- **phi3:mini** (2.3GB): Excellent instruction following, great for "20 words or less" prompts
- **granite4:latest** (SHA: `sha256-5c7ac4aead1bcf4c8da9534ed72cc632d005aeed6547f1e8662ccdfae688364e`): IBM's efficient model, good alternative

All of these run smoothly on consumer hardware—no GPU required, just a few GB of RAM. Perfect for running on your laptop or homelab.

The key insight: **For generating 20-word summaries, you don't need GPT-4**. A 1-3B parameter model is more than sufficient, completely private, and runs locally.

## Key Features

### 1. **AI-Powered Summaries**
- Short summaries (20 words) for quick filtering
- Extended summaries for detailed analysis
- Custom prompts for different use cases (technical, business, casual)

### 2. **Hacker News-Inspired UI**
- Clean, minimalist design
- Fast loading, no bloat
- Mobile-responsive

### 3. **Feed Management**
- Add custom RSS feeds
- Favorites system
- Search functionality
- Export capabilities

### 4. **Privacy Controls**
- Comprehensive tracking removal
- Privacy settings panel
- Transparent about what's blocked

## Lessons Learned

### 1. **Small Models Are Enough**
For summarization tasks, 1-3B parameter models are perfectly adequate. No need for GPT-4 when generating 20-word summaries.

### 2. **Privacy Requires Active Effort**
Privacy isn't just "don't track"—it's actively removing trackers, stripping parameters, and preventing data leakage at every layer.

### 3. **AI-Assisted Development Works**
Using Cursor for "vibe coding" was incredibly productive. It's not about replacing developers—it's about amplifying productivity, especially for learning new domains.

### 4. **Self-Hosting Is Viable**
Running Ollama locally, managing your own infrastructure—it's all achievable and gives you complete control. No cloud dependencies, no API keys, just your data and your models.

### 5. **Privacy Requires Active Effort**
Privacy isn't just "don't track"—it's actively removing trackers, stripping parameters, and preventing data leakage at every layer. Every feature was designed with privacy in mind.

## Future Enhancements

- **Multi-Provider Support**: Add support for cloud AI providers (for future hosting offering)
- **Feed Recommendations**: AI-powered feed suggestions
- **Advanced Filtering**: Content-based filtering using embeddings
- **Mobile App**: PWA or native app
- **Hosting Solution**: Managed hosting option for those who want it (stay tuned!)

## Conclusion

RSS AI Reader demonstrates that you can build privacy-first, self-hosted applications that leverage AI without compromising on control or sustainability. By using Small Language Models and a self-hosted architecture, we get:

- ✅ **Privacy**: Complete data control, no tracking, no data collection
- ✅ **Sustainability**: Small models, local processing, no cloud dependencies
- ✅ **Simplicity**: Runs on your laptop or homelab, no complex infrastructure
- ✅ **Open Source**: Apache 2.0 license, full transparency
- ✅ **Flexibility**: Easy to extend and customize

The project is available on GitHub and ready for self-hosting. Whether you're running it on your laptop with Ollama or deploying to your homelab, it's designed to be simple and private.

**Key Takeaways:**
- Small Language Models are sufficient for many AI tasks (like summarization)
- Privacy requires active protection, not just passive avoidance
- AI-assisted development can accelerate learning and productivity
- Self-hosting AI is not just possible—it's practical and sustainable
- You don't need cloud APIs for simple AI tasks—local models work great

---

## Resources

- **Project Repository**: [GitHub Link - to be added]
- **Ollama**: https://ollama.ai - Local AI models
- **Small Language Models Research**: https://arxiv.org/abs/2506.02153
- **Cursor AI IDE**: https://cursor.sh - AI-assisted development
- **Dash Platform** (for mobile testing): https://dash.resiz.es

---

*What are your thoughts on self-hosted AI applications? Have you built similar projects? Let me know in the comments or reach out on [Twitter/LinkedIn].*

