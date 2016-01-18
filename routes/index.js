var express = require('express');
var router = express.Router();
var model = require('../models/Data');



/* GET home page. */
router.get('/', function(req, res, next) {
  var objIns = {
    title: 'Rivus',
    initiate: function(){
      console.log('Initialized!');
      console.log(objIns.sayHello);
    },
    sayHello: "hello I'm the object!"
  };

  model.find(function(err, data){
    if(err){console.log(err)}
    res.json(data);
    console.log(data);
  })
  res.render('index', objIns);


});

module.exports = router;
