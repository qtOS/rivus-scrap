var express = require('express');
var router = express.Router();
var model = require('../models/Data');

function buildErrorResponse(err) {
  return {
    message: err,
    status: 500,
    note: 'This response was generated due to user error.'
  };
};

function addMessageToSuccessfulQuery(obj, msg) {
  var ret = obj;
  ret.message = msg;
  return ret;
};

/* GET data listing. */
router.get('/', function(req, res, next) {
  model.find(function(err, data) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(data);
    }
  });
});

router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(err, data) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(data);
    }
  });
});

router.post('/', function(req, res, next) {
  model.create(req.body, function(err, data) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(data);
    }
  });
});

router.put('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, data) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(data);
    }
  });
});

router.patch('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, data) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(data);
    }
  });
});


router.delete('/:id', function(req, res, next) {
  model.findByIdAndRemove(req.params.id, req.body, function(err, data) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(data);
    }
  });
});


module.exports = router;
