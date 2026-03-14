const config = {
  serverUrl: import.meta.env.VITE_APP_SERVERURL || "/api/v1",
  localUrl: import.meta.env.VITE_APP_LOCALURL || "http://localhost:3030/api/v1",
  proxyUrl: import.meta.env.VITE_APP_PROXYURL,
  serverUrl2: import.meta.env.VITE_APP_SERVERURL2 || "/api/v1",
};

export default config;
