var express = require('express');
var router = express.Router();
var  x = Math.random()
var  y = Math.random()

/* GET home page. */
router.get('/', function(req, res, next) {
    const pow = Math.pow(x,y)
    
  res.render('computation', { title: 'Nikhila Mateti Bonus' },{pow});
});

module.exports = router;
