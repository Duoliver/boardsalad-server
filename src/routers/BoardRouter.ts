import { Router } from "express";
import BoardController from "../api/controllers/BoardController";

const router = Router();
const boardController = new BoardController();

router.get("/", boardController.get);

export default router;
