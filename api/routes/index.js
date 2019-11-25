var express = require('express');
var parser = require('xml2json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 
  var xml = "<foo attr=\"value\">bar</foo>";
  console.log("input -> %s", xml)
  
  // xml to json
  var json = parser.toJson(xml);
  console.log("to json -> %s", json);
  res.render('index', { title: json });
});

module.exports = router;
