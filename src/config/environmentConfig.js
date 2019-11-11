require("dotenv").config();

const { PORT, CORS_DOMAIN } = process.env;

const FALLBACK_PORT = 3001;

// calling process.env again due to changes in test env dynamically
export const isProductionEnvironment = () => process.env.ENVIRONMENT === "production";

export const isDevelopmentEnvironment = () => process.env.ENVIRONMENT === "development";

export const isTestEnvironment = () => process.env.ENVIRONMENT === "test";

const commonConfig = {
  environment: process.env.ENVIRONMENT || "development",
  port: parseInt(PORT, 10) || FALLBACK_PORT,
  corsDomain: (isProductionEnvironment() ? CORS_DOMAIN : "*"),
  apiRoot: process.env.API_ROOT || "/api"
};

export default commonConfig;
