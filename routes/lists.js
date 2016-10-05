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
  //res.json('[{"_id":"57e2392ef36d281f21d848dd","name":"test","description":"test description"},{"_id":"57ead85df36d2870b8191f1f","name":"second","description":"to see the demo in action"}]');
});



module.exports = router;
