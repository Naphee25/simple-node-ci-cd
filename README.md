# Simple Node.js CI/CD 

This project demonstrates a minimal Node.js application with a working CI/CD pipeline using GitHub Actions and Docker.

## 🚀 Features

* Node.js app with Express
* ESLint with flat config setup
* Unit tests using Jest
* GitHub Actions for CI/CD
* Dockerfile for containerization
* Push to Docker Hub on commit

## 🛠️ Requirements

* Node.js & npm
* Docker installed locally
* Docker Hub account (for CI/CD)

## 📦 Installation

```bash
npm install
```

## 🧪 Run Tests

```bash
npm test
```

## 🧹 Lint Code

```bash
npm run lint
```

## 🐳 Build Docker Image

```bash
docker build -t your-dockerhub-username/simple-node-ci-cd .
```

## 🧬 CI/CD Setup

The pipeline is configured in `.github/workflows/docker.yml`. It automatically:

* Installs dependencies
* Runs lint & tests
* Builds Docker image
* Pushes to Docker Hub

## 🔐 Secrets Required

Set these in your GitHub repository settings under `Settings > Secrets and variables > Actions`:

* `DOCKER_USERNAME`
* `DOCKER_PASSWORD`

## 📁 Project Structure

```
.
├── app.js
├── Dockerfile
├── test/
│   └── app.test.js
├── .github/
│   └── workflows/
│       └── docker.yml
├── eslint.config.mjs
├── .dockerignore
├── .gitignore
├── package.json
└── package-lock.json
```
