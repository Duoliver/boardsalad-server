import { Board } from "../models/BoardModel";

class BoardRepository {
  public async getAllBoards(): Promise<Board[]> {
    return await Board.findAll();
  }
}

export default BoardRepository;
