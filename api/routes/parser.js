
var express = require('express');
var router = express.Router();

router.get('/company_info', function(req, res, next) {
    let json = JSON.parse(req.app.get('json'));
    res.send(json.AuditFile.Header);
});

router.get('/customers', function(req, res, next) {
    let json = JSON.parse(req.app.get('json'));
    res.send(json.AuditFile.MasterFiles.Customer);
});

router.get('/products', function(req, res, next) {
    let json = JSON.parse(req.app.get('json'));
    res.send(json.AuditFile.MasterFiles.Product);
});

module.exports = router;