import { Sequelize } from "sequelize";

import env from "../config/env.config";

export default new Sequelize(
  `postgres://${env.databaseUser}:${env.databasePassword}@${env.databaseHost}:${env.databasePort}/${env.databaseName}`,
  {
    pool: {
      max: 20,
      idle: 3000,
    },
  }
);
