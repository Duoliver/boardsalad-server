import { Request, Response } from "express";
import BoardRepository from "../repositories/BoardRepository";

class BoardService {
  private boardRepository: BoardRepository;

  constructor() {
    this.boardRepository = new BoardRepository();
  }

  public async getAllBoards(req: Request, res: Response): Promise<void> {
    try {
      const boards = await this.boardRepository.getAllBoards();

      res.status(200).json(boards);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  public async createBoard(req: Request, res: Response): Promise<void> {
    try {
      const board = await this.boardRepository.createBoard(req.body);

      res.status(200).json(board);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default BoardService;
