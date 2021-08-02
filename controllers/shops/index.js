const { Router } = require('express');
const router = Router();
const ctrl = require('./shops.ctrl');

// GET /shops/:id  id로 숫자만 받는다
router.get('/:id(\\d+)', ctrl.get_shops_detail);

module.exports = router;
