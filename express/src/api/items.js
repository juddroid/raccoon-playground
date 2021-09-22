const express = require('express');
const router = express.Router();

router.use(function (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send('item get');
});

router.get('/item', (req, res) => {
  res.send('items');
});

exports.router = router;
