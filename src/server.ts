import express, { Express } from "express";
import bodyParser from "body-parser";
import boardRouter from "./routers/BoardRouter";
import sequelize from "./dbconfig/dbconnector";
import { Post } from "./api/models/PostModel";
import { Board } from "./api/models/BoardModel";

class Server {
  private app: Express;

  constructor() {
    this.app = express();
    this.config();
    this.dbConnect();
    this.syncModels();
    this.routerConfig();
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
      await Board.sync();
      await Post.sync();
      console.log("All models were synchronized successfully");
    } catch (error) {
      console.error("An error occured while synchronizing");
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
