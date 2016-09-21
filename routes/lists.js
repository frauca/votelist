var express = require('express');
var router = express.Router();

var LIST_COLLECTION='listcollection';

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.db;
    var collection = db.get(LIST_COLLECTION);
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});



module.exports = router;
