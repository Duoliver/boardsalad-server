import { Board } from "../model/BoardModel";

class BoardController {
  public async get(req, res) {
    try {
      const boards = await Board.findAll();

      res.send(boards);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default BoardController;
