const { Router } = require('express');
const router = Router();

router.use('/posts', require('./posts'));

router.use('/', (req, res) => {
  res.send('hello express');
});

module.exports = router;
