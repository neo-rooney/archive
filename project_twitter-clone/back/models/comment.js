module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      //테이블명 comments
      content: {
        type: DataTypes.TEXT, //길이를 특정 할 수 없는 긴 글은 TEXT
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4", //한글 & 이모티콘까지 허용
      collate: "utf8mb4_general_ci",
    }
  );
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User) //UserId
    db.Comment.belongsTo(db.Post) //PostId
  };
  return Comment;
};
