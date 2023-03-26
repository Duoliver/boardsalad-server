import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../dbconfig/dbconnector";

type BoardAttributes = {
  id: string;
  name: string;
  description: string;
};

type BoardCreationAttributes = Optional<BoardAttributes, "id">;

class Board extends Model<BoardAttributes, BoardCreationAttributes> {}

Board.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "board",
    underscored: true,
  }
);

export { Board };
