import User from "#app/models/user.js";

export default class CreateUsersTable {
  up() {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
          allowNull: false,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        userType: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      }
    );
  }
  down() {}
}
