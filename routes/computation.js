var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var  rand1 = Math.random().toFixed(2)
  var rand2 = Math.random().toFixed(2)
  var y = req.query.y;
  var x = req.query.x;

  if(y==undefined && x==undefined){
    x = rand1
    y = rand2
  }
  pow = Math.pow(x,y).toFixed(2)
  trunc= Math.trunc(x)
  tanh = Math.tanh(y).toFixed(2)
  sign = Math.sign(x).toFixed(2)
  res.send(`Math.pow(${x},${y}): ${pow} Math.trunc(${x}) is: ${trunc} Math.tanh(${y}) is : 
  ${tanh} Math.sign(${x}) is : ${sign}`);
});

module.exports = router;
