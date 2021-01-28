## Ingress-nginx installation

https://kubernetes.github.io/ingress-nginx/deploy/#docker-for-mac

`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.43.0/deploy/static/provider/cloud/deploy.yaml`

## Start development environment

`skaffold dev`

## Create secret in k8

`kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf`

## Update common module and push to npm registry

`cd common`
`npm run pub`

## Update common module dependency in tickets

`cd tickets`
`npm update @bc_tickets/common`

## Running test in tickets

`cd tickets`
`npm run test`

## Development only port forwarding

`kubectl get pods`
`kubectl port-forward nats-depl-75854b5b89-dbbdz 4222:4222`
