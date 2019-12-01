
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/company_info', function(req, res, next) {
    let json = JSON.parse(req.app.get('json'));
    res.send(json.AuditFile.Header);
});

router.get('/suppliers', function() {
    let json = JSON.parse(req.app.get('json'));
    res.send(json.AuditFile.MasterFiles.Supplier);
});

router.get('/something', function(req, res, next) {
    if(req.app.get('api_token') == null)
        res.send('Error');
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/purchases/orders',
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function(error, response, body) {
        console.log(body);
    });
});

module.exports = router;