var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_27', { title: '张湛 407414027' });
});

module.exports = router;
