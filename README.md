# Node.js Kubernetes Demo with Autoscaling & Rolling Deployments

![Kubernetes](https://img.shields.io/badge/kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

A production-ready Node.js application deployed on Kubernetes with:
- Horizontal Pod Autoscaling (HPA)
- Rolling updates and rollbacks
- Multi-node deployment
- Self-healing capabilities

## 📋 Prerequisites

- Docker Desktop ([Install](https://www.docker.com/products/docker-desktop))
- Minikube ([Install](https://minikube.sigs.k8s.io/docs/start/))
- kubectl ([Install](https://kubernetes.io/docs/tasks/tools/))
- 4GB+ RAM allocated to Minikube

## 🚀 Quick Start

### 1. Build and Push Docker Image
```bash
docker build -t your-username/nodejs-kubernetes-demo:latest ./app
docker push your-username/nodejs-kubernetes-demo:latest