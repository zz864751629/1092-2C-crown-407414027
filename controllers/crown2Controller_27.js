const Category_27 = require('../models/categoryModel_27');
const Clothing_27 = require('../models/clothingModel_27')

exports.getHomepage = async (req, res, next) => {
    let data;
    //const [rows] = await db.query("SELECT * from category_27");
    const [rows] = await Category_27.fetchAll();
    data = rows;
    
    //res.json(data);
  
    res.render('crown2_27', { 
    title: '张湛 407414027 (async/await)',
    data: data
    });
}

exports.getProductsByCategory = async (req, res) => {
   console.log('req.params', req.params.product);
   let data = {};
   data.cid = 0;

   if(req.params.product == 'hats') data.cid = 1;
   else if (req.params.product == 'jackets') data.cid = 2;
   else if (req.params.product == 'sneakers') data.cid = 3;
   else if (req.params.product == 'womens') data.cid = 4;
   else if (req.params.product == 'mens') data.cid = 5;

   const [rows] = await Clothing_27.fetchProductByCategory(data.cid);
   data.clothing = rows;
   //res.json(data);
   if (data.cid == 1) res.render('hats_27');
   else if (data.cid == 4) res.render('womens_27');
}

