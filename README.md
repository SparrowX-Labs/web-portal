# SparrowX web portal

React/Vite frontend for the SparrowX sample platform. It provides the browser experience for customer, task, notification, billing, and reporting workflows.

The frontend is packaged as a container and deployed by Argo CD through the shared application Helm chart. `helm-values-dev.yaml` and `helm-values-prod.yaml` configure the environment-specific values. `dev` and `prod` are separate namespaces on the same EKS cluster, with Gateway API resources maintained in the [`gateway-api`](../gateway-api) repository.

## Local development

```bash
npm ci
npm run dev
npm test -- --run
```

Build with `npm run build`. Runtime API endpoints are configured through the Vite environment settings used by the selected deployment values.

## Delivery

Reusable workflows test and scan the frontend image, sign and attest it, promote the same digest between environments, synchronize Argo CD, and run smoke/API checks. Production is promoted from the image validated in development; it is not rebuilt.

Define `HEALTH_CHECK_PATH` and optionally override `AWS_ROLE_NAME`. AWS account/region, environment URLs, and Argo CD credentials are shared organization configuration.

## License

See [LICENSE.md](LICENSE.md).
