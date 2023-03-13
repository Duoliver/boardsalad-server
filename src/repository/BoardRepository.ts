import { Board } from "../model/BoardModel";

class BoardRepository {
  public async getAllBoards(): Promise<Board[]> {
    return await Board.findAll();
  }
}

export default BoardRepository;
