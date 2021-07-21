const path = require("path");
const uploadDir = path.join(__dirname, "../uploads");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    // 이미지가 저장되는 도착지 지정
    callback(null, uploadDir);
  },
  filename: (req, file, callback) => {
    //shops-날짜.jpg(확장자)로 파일저장
    callback(null, "shops-" + Date.now() + "." + file.mimetype.split("/")[1]);
  },
});

module.exports = multer({ storage: storage });
