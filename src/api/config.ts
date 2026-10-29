// Keep API calls same-origin by default. This is required for the Gateway API
// deployment, where dev and prod use different public hostnames but the same
// image is promoted between environments.
const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim();
const baseUrl =
  configuredBaseUrl && configuredBaseUrl !== 'null' && configuredBaseUrl !== 'undefined'
    ? configuredBaseUrl.replace(/\/+$/, '')
    : '';

export const API_CONFIG = {
  customer: `${baseUrl}/api/customers`,
  notification: `${baseUrl}/api/notifications`,
  task: `${baseUrl}/api/tasks`,
  billing: `${baseUrl}/api/billing`,
  reporting: `${baseUrl}/api/reporting`,
};
