import { Request, Response } from "express";
import BoardService from "../service/BoardService";

class BoardController {
  private boardService: BoardService;

  constructor() {
    this.boardService = new BoardService();
    this.get = this.get.bind(this);
  }

  public async get(req: Request, res: Response) {
    this.boardService.getAllBoards(req, res);
  }
}

export default BoardController;
