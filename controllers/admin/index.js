const { Router } = require("express");
const router = Router();
const ctrl = require("./admin.ctrl");

const path = require("path");
const uploadDir = path.join(__dirname, "../../uploads");
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

const upload = multer({ storage: storage });

router.get("/shops", ctrl.get_shops);

router.get("/shops/write", ctrl.get_shops_write);

router.post("/shops/write", upload.single("thumbnail"), ctrl.post_shops_write);

router.get("/shops/detail/:id", ctrl.get_shops_detail);

router.post("/shops/detail/:id", ctrl.add_menu);

router.get("/shops/delete/:shop_id/:menu_id", ctrl.remove_menu);

router.get("/shops/edit/:id", ctrl.get_shops_edit);

router.post("/shops/edit/:id", ctrl.post_shops_edit);

router.get("/shops/delete/:id", ctrl.get_shops_delete);

module.exports = router;
