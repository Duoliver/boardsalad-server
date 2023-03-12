import { Sequelize } from "sequelize";

export default new Sequelize(
  `postgres://postgres:Programador2003@localhost:5434/${"boardsalad"}`,
  {
    pool: {
      max: 20,
      idle: 3000,
    },
  }
);
