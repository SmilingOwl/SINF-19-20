var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function (req, res, next) {
    if (req.app.get('api_token') == null)
        return res.send('Error');
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/materialsCore/materialsItems/',
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function (error, response, body) {
        try {
            let stockProduct = [];
            let result = [];
            let stock = JSON.parse(body);
 
            stock.forEach((stockInfo) => {
                stockProduct = {
                    name: stockInfo.description,
                    code: stockInfo.itemKey,
                    unitPrice: 0,
                    quantity: 0,
                    totalValue: 0,
                }

                stockInfo.materialsItemWarehouses.forEach((warehouse) => {
                    stockProduct.unitPrice = warehouse.calculatedUnitCost.amount;
                    stockProduct.quantity += warehouse.stockBalance;
                    stockProduct.totalValue += warehouse.calculatedUnitCost.amount * warehouse.stockBalance;

                });
                result.push(stockProduct);
            });
            result.sort((a, b) => (a.totalValue < b.totalValue) ? 1 : -1); 
           return res.send(result);
           
        } catch (err) {
            console.log("Error on inventory");
            res.status(400);
            return res.send({});
        }
    });
});
module.exports = router;
