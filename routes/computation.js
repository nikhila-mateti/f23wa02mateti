var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var  rand = Math.random().toFixed(2)
  var y = req.query.x;
  if(y == undefined){

    y =rand;

  }
  pow = Math.pow(rand,rand)
  res.send(`${pow}`);
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