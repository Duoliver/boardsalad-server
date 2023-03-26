import { Board } from "../models/BoardModel";
import sequelize from "../../dbconfig/dbconnector";
import { BoardRequest } from "../dto/Board/BoardRequest";
import { BoardResponse } from "../dto/Board/BoardResponse";

class BoardRepository {
  public async getAllBoards(): Promise<Board[]> {
    return await Board.findAll();
  }

  public async createBoard(data: BoardRequest): Promise<BoardResponse> {
    const transaction = await sequelize.transaction();

    try {
      const board = await Board.create(data, { transaction });
      await transaction.commit();
      return board.dataValues as BoardResponse;
    } catch (err) {
      console.error(err);
      await transaction.rollback();
    }
  }
}

export default BoardRepository;
