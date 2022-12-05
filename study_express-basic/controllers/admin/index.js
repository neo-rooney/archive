const { Router } = require("express");
const router = Router();
const ctrl = require("./admin.ctrl");

router.get("/products", ctrl.get_products);

router.get("/products/write", ctrl.get_products_write);

router.post("/products/write", ctrl.post_products_write);

router.get("/products/detail/:id", ctrl.get_products_detail);

router.get("/products/edit/:id", ctrl.get_product_edit);

router.post("/products/edit/:id", ctrl.post_product_edit);

router.get("/products/delete/:id", ctrl.get_product_delete);

module.exports = router;
