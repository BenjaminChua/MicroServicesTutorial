# Ticketing web application

Microservices application with Services that include User Authentication, Ticket Creation, Order Creation, Payment and timed expiration. Front-end is built using service-side rendering Next.js and reusable code is packaged into an npm module named common.

## Development

### Ingress-nginx installation

https://kubernetes.github.io/ingress-nginx/deploy/#docker-for-mac

`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.43.0/deploy/static/provider/cloud/deploy.yaml`

### Start development environment

`skaffold dev`

### Create secret in k8

`kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf`

### Update common module and push to npm registry

`cd common`

`npm run pub`

### Update common module dependency in tickets

`cd tickets`

`npm update @bc_tickets/common`

### Running test in tickets

`cd tickets`

`npm run test`

### Development only port forwarding

`kubectl get pods`

`kubectl port-forward nats-depl-75854b5b89-dbbdz 4222:4222`

## Deployment (DigitalOcean)

### Install doctl

`brew install doctl`

### Authentication

`DigitalOcean dashboard > API > Generate New Token`

`doctl auth init` and paste in the generated token

### Get connection info for our new cluster

`doctl kubernetes cluster kubeconfig save <cluster_name>`

### List all contexts

`kubectl config view`

### Use a different context

`kubectl config use-context <context_name>`

### Add Docker Hub account information as a secret in GitHub

`Settings > Secrets > New repository secret`

### Create secrets in cluster

`kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf`

### Install ingress-nginx in cluster

https://kubernetes.github.io/ingress-nginx/deploy/#digital-ocean

`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.43.0/deploy/static/provider/do/deploy.yaml`

### Add HTTPS

see cert-manager.io

### Add Email support

see Mailchimp/Sendgrid
