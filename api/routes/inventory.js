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
            let stock = JSON.parse(body);
 
            stock.forEach((stockInfo) => {
                stockProduct = {
                    name: stockInfo.description,
                    unitPrice: stockInfo.calculatedUnitCost.amount,
                }

                stockInfo.materialsItemWarehouses.forEach((warehouse) => {
                    stockProduct.quantity += warehouse.stockBalance;
                    stockProduct.totalValue += warehouse.calculatedUnitCost.amount * warehouse.stockBalance;

                });
            });

           
            return res.send(stockProduct);
        } catch (err) {
            console.log(body);
            res.status(400);
            return res.send({});
        }
    });
});
