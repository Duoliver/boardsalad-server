import { DataTypes, Model } from "sequelize";
import sequelize from "../dbconfig/dbconnector";
import { Board } from "./BoardModel";

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    textAlign: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    textPosition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    textColour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    backgroundColour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fontStyle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fontSize: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "post",
    underscored: true,
  }
);

Post.belongsTo(Board);
Board.hasMany(Post);

export { Post };
