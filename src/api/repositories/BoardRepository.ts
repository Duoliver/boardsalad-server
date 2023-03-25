import { Board } from "../models/BoardModel";
import sequelize from "../../dbconfig/dbconnector";

class BoardRepository {
  public async getAllBoards(): Promise<Board[]> {
    return await Board.findAll();
  }

  public async createBoard(data): Promise<string> {
    const transaction = await sequelize.transaction();

    try {
      const board = await Board.create(data, { transaction });
      await transaction.commit();
      return board.dataValues.id;
    } catch (err) {
      console.error(err);
      transaction.rollback();
    }
  }
}

export default BoardRepository;
