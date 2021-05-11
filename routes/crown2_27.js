var express = require('express');
var router = express.Router();


const categories = require('../data/categories');

const crown2Controller_27 = require('../controllers/crown2Controller_27')

const db = require('../utils/database_27');
const Category_27 = require('../models/categoryModel_27')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_27', { 
    title: '张湛 407414027 (static)',
    data: categories 
  });
});


router.get('/homepage', crown2Controller_27.getHomepage
  
//async function(req, res, next) {
  
  //let data;
  //const [rows] = await db.query("SELECT * from category_27");
  //const [rows] = await Category_27.fetchAll;
  //data = rows;
  
  //res.json(data);

  //res.render('crown2_27', { 
  //title: '张湛 407414027 (async/await)',
  //data: data
  //});
//}
);

router.get('/shop_27/:product', crown2Controller_27.getProductsByCategory)

module.exports = router;
