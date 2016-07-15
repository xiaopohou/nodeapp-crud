var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('indexs');
});

router.get('/haha1', function(req, res, next) {
  res.send('haha1');
});


module.exports = router;
