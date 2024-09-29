export function urlPath(applicationPath, tenant) {
  return `/${tenant}${applicationPath}`;
}

export function builderUrl(applicationPath, tenant, request) {
  return new URL(urlPath(applicationPath, tenant), request.url);
}
