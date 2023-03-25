import { Request, Response } from "express";
import BoardRepository from "../repositories/BoardRepository";

class BoardService {
  private boardRepository: BoardRepository;

  constructor() {
    this.boardRepository = new BoardRepository();
  }

  public async getAllBoards(req: Request, res: Response) {
    try {
      const boards = await this.boardRepository.getAllBoards();

      res.status(200).json(boards);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  public async createBoard(req: Request, res: Response) {
    try {
      const boardId = await this.boardRepository.createBoard(req.body);

      res.status(200).json({ boardId });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default BoardService;
