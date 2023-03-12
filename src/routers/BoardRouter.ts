import express, { Router } from "express";
import BoardController from "../controller/BoardController";

const router = Router();
const boardController = new BoardController();

router.get("/", boardController.get);

export default router;
