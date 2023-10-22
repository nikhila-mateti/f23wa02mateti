var express = require('express');
var router = express.Router();
var  x = Math.random()
var  y = Math.random()
var pow = Math.pow(x,y)
var sinh = Math.sinh(x)
/* GET home page. */
router.get('/', function(req, res, next) {
   
    
  res.render(`${pow},\n${sinh}`);
});

module.exports = router;
