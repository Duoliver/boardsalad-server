import { Request, Response } from "express";
import BoardService from "../services/BoardService";

class BoardController {
  private boardService: BoardService;

  constructor() {
    this.boardService = new BoardService();
    this.get = this.get.bind(this);
    this.create = this.create.bind(this);
  }

  public async get(req: Request, res: Response): Promise<void> {
    await this.boardService.getAllBoards(req, res);
  }

  public async create(req: Request, res: Response): Promise<void> {
    await this.boardService.createBoard(req, res);
  }
}

export default BoardController;
