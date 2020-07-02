const express = require("express");
const multer = require("multer");
const path = require("path");
const { isLoggedIn } = require("./middlewares");
const db = require("../models");

const router = express.Router();
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + Date.now() + ext);
    },
  }),
  limit: {
    fileSize: 20 * 1024 * 1024,
  },
});

router.post("/images", isLoggedIn, upload.array("image"), (req, res) => {
  console.log("req.tiles", req.files);
  res.json(req.files.map((v) => v.filename));
});

router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const hashtags = req.body.content.match(/#[^\s#]+/g);
    const newPost = await db.Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map((tag) =>
          db.Hashtag.findOrCreate({
            where: { name: tag.slice(1).toLowerCase() },
          })
        )
      );
      await newPost.addHashtags(result.map((r) => r[0]));
      //다 대 다 관계에서는 add, get을 붙이고 model이름의 복수형 메서드가 자동생성된다.! 시퀄라이즈가 해주는것!
    }
    const fullPost = await db.Post.findOne({
      where: { id: newPost.id },
      include: [{
        model: db.User,
        attributes:['id', 'nickname']
      }]
    })
    return res.json(fullPost)
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
