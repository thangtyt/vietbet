let express = require('express');
let router = express.Router();
let random = require('../libs/random');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('get router');
  res.render('index', {  });
});
router.post('/',function (req,res,next) {
  console.log('post');
  let form = req.body;
  let result = [];
  try{
    result = random(form);
    console.log(result);
  }catch(e) {
    console.log(e.message)
  }

  res.send(result);
});

module.exports = router;
