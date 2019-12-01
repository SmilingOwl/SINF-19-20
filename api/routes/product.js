
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:productId', function(req, res, next) {
    let json = JSON.parse(req.app.get('json'));
    let product = json.AuditFile.MasterFiles.Product.filter(p => p.ProductCode == req.params.productId);
    product[0].ProductCode = "LENCOS"; //TODO remove
    if(req.app.get('api_token') == null)
        res.send('Error');
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/salesCore/salesItems/' + product[0].ProductCode,
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function(error, response, body) {
        product[0].api = JSON.parse(body);
        res.send(product[0]);
    });
});
function getProductSalesChart() {

}

module.exports = router;