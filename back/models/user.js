module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING(40),
        allowNull: false, //필수
      },
      nickname: {
        type: DataTypes.STRING(20),
        allowNull: false, //필수
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false, //필수
      },
    },
    {
      charset: "utf8", //DB에 한글 저장 위해
      collate: "utf8_general_ci", //DB에 한글 저장 위해
    }
  );
  User.assosicate = (db) => {};
  return User;
};
