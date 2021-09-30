const { Router } = require('express');
const router = Router();
const ctrl = require('./posts.ctrl');
const paginate = require('express-paginate');

router.get('/', paginate.middleware(5, 50), ctrl.get_posts);

router.post('/', ctrl.post_post_detail);

router.get('/:id(\\d+)', ctrl.get_post_detail);

router.put('/:id(\\d+)', ctrl.edit_post_detail);

router.delete('/:id(\\d+)', ctrl.delete_post_detail);

router.post('/tag', ctrl.post_tag);

router.delete('/tag/:post_id/:tag_id', ctrl.delete_tag);

router.get('/search', ctrl.search_post);

module.exports = router;
