const { Router } = require("express");
const router = Router();
const ctrl = require("./admin.ctrl");
const upload = require("../../middleware/multer");

//csrf 설정
const csrfProtection = require("../../middleware/csrf");

router.get("/shops", ctrl.get_shops);

router.get("/shops/write", csrfProtection, ctrl.get_shops_write);

router.post(
  "/shops/write",
  upload.single("thumbnail"),
  csrfProtection,
  ctrl.post_shops_write
);

router.get("/shops/detail/:id", ctrl.get_shops_detail);

router.post("/shops/detail/:id", ctrl.add_menu);

router.get("/shops/delete/:shop_id/:menu_id", ctrl.remove_menu);

router.get("/shops/edit/:id", csrfProtection, ctrl.get_shops_edit);

router.post(
  "/shops/edit/:id",
  upload.single("thumbnail"),
  csrfProtection,
  ctrl.post_shops_edit
);

router.get("/shops/delete/:id", ctrl.get_shops_delete);

module.exports = router;
