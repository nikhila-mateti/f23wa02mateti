var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var  x = Math.random().toFixed(2)
  var y = Math.random().toFixed(2)
  
  pow = Math.pow(x,y).toFixed(2)
  trunc= Math.trunc(x).toFixed(2)
  tanh = Math.tanh(y).toFixed(2)
  sign = Math.sign(x).toFixed(2)
  res.send(`Math.pow(${x},${y}): ${pow} Math.trunc(${x}) is: ${trunc} Math.tanh(${y}) is : ${tanh} Math.sign(${x}) is : ${sign}`);
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