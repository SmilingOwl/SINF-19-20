
var express = require('express');
var router = express.Router();

router.get('/company_info', function(req, res, next) {
    let json = JSON.parse(req.app.get('json'));
    console.log(typeof json);
    console.log(json.AuditFile);
    res.send(json.AuditFile.Header);
});

module.exports = router;