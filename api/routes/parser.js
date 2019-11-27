
var express = require('express');
var router = express.Router();

router.get('/company_info', function(req, res, next) {
    let json = JSON.parse(req.app.get('json'));
    res.send(json.AuditFile.Header);
});

router.get('/customers', function(req, res, next) {
    let json = JSON.parse(req.app.get('json'));
    console.log(json.AuditFile.MasterFiles.Customer[0]);
    res.send(json.AuditFile.MasterFiles.Customer);
});

module.exports = router;