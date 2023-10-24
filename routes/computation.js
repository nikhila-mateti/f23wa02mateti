var express = require('express');
var router = express.Router();
var  x = Math.random()
var  y = Math.random()
var pow = Math.pow(x,y)
var sinh = Math.sinh(x)
/* GET home page. */
router.get('/', function(req, res, next) {
  var  rand = Math.random().toFixed(2)
  var y = req.query.x;
  if(y == undefined){

    y =rand;

  }
  pow = Math.pow(rand,rand)
  res.render(`${pow}`);
});

module.exports = router;
/*

  var y = req.query.x;
  if(y == undefined){

    y =rand;

  }

    a=Math.cos(rand).toFixed(2);

    b=Math.asin(rand).toFixed(2);

    c=Math.asinh(rand).toFixed(2);

    res.send(`Math.cos(${y}): ${a} Math.asin(${y}) is: ${b} Math.asinh(${y}) is : ${c}`);


  });


 */