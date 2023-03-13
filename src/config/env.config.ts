export default {
  port: process.env.PORT ?? "",
  databaseUser: process.env.DATABASE_USER ?? "",
  databasePassword: process.env.DATABASE_PASSWORD ?? "",
  databaseHost: process.env.DATABASE_HOST ?? "",
  databasePort: process.env.DATABASE_PORT ?? "",
  databaseName: process.env.DATABASE_NAME ?? "",
};
