
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/company_info', function (req, res, next) {
    if (req.app.get('api_token') == null){
        res.status(400);
        return res.send('Error');
    }
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/corePatterns/companies/SNIF',
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function (error, response, body) {
        try {
            return res.send(body);
        } catch(ex) {
            console.log('Error at /');
            res.status(400);
            return res.send({})
        }
    });
});



module.exports = router;