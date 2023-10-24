var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var  rand1 = Math.random().toFixed(2)
  var rand2 = Math.random().toFixed(2)
  
  pow = Math.pow(rand1,rand2)
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