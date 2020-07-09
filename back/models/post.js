module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      //테이블명 posts
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
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); //UserId 필드가 생긴다!!
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" }); //UserId
    db.Post.belongsTo(db.Post, { as: "Retweet" });
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" });
  };
  return Post;
};
