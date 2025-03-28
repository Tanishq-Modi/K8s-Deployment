# Node.js Kubernetes Demo

This is a simple Node.js application configured to run on Kubernetes with autoscaling.

## Prerequisites

- Docker
- Kubernetes cluster with 2 nodes
- kubectl configured to access your cluster

## Build and Deploy

1. Build Docker image:
   ```bash
   docker build -t your-docker-username/nodejs-kubernetes-demo:latest ./app