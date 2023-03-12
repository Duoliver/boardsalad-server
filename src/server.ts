import express, { Application, Router } from "express";
import bodyParser from "body-parser";
import boardRouter from "./routers/BoardRouter";
import sequelize from "./dbconfig/dbconnector";

class Server {
  private app;

  constructor() {
    this.app = express();
    this.config();
    this.routerConfig();
    this.dbConnect();
    this.syncModels();
  }

  private config() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json({ limit: "1mb" })); // 100kb default
  }

  private async dbConnect() {
    try {
      await sequelize.authenticate();
      console.log("Connected");
    } catch (error) {
      console.error("Unable to connect to the database", error);
    }
  }

  private async syncModels() {
    try {
      await sequelize.sync();
      console.log("All models were synchronized successfully");
    } catch (error) {
      console.error("An error occured whi");
    }
  }

  private routerConfig() {
    this.app.use("/boards", boardRouter);
  }

  public start = (port: number) => {
    return new Promise((resolve, reject) => {
      this.app
        .listen(port, () => {
          resolve(port);
        })
        .on("error", (err: Object) => reject(err));
    });
  };
}

export default Server;
