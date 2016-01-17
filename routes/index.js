var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  var objIns = {
    title: 'Rivus',
    initiate: function(){
      console.log('Initialized!');
      console.log(objIns.sayHello);
    },
    sayHello: "hello I'm the object!"
  }
  res.render('index', objIns);


});

module.exports = router;
