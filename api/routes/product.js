
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:productId', function(req, res, next) {
    if(req.app.get('api_token') == null)
        return res.send('Error');
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/salesCore/salesItems/' + req.params.productId,
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function(error, response, body) {
        try {
            let product = {
                api: JSON.parse(body),
            }
            return res.send(product);
        } catch(err) {
            console.log(body);
            console.log('Error at product/{id}/sales');
            res.status(400);
            return res.send({});
        }
    });
});

router.get('/:productId/stock', function(req, res, next) {
    if(req.app.get('api_token') == null)
        return res.send('Error');
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/materialsCore/materialsItems/' + req.params.productId,
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function(error, response, body) {
        try {
            let stock = JSON.parse(body);
            let quantity = 0;
            stock.materialsItemWarehouses.forEach((warehouse) => {
                quantity += warehouse.stockBalance;
            });
            let stockInfo = {
                quantity: quantity,
            }
            return res.send(stockInfo);
        } catch (err) {
            console.log(body);
            console.log('Error at product/{id}/sales');
            res.status(400);
            return res.send({});
        }
    });
});

router.get('/:productId/sales', function(req, res, next) {
    if(req.app.get('api_token') == null)
        return res.send('Error');
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/billing/invoices',
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function(error, response, body) {
        try {
            let invoices = JSON.parse(body);
            let product_info = {
                quantity_sold: 0,
                total_price: 0,
            };
            invoices.forEach((invoice) => {
                invoice.documentLines.forEach((line) => {
                    if(line.salesItem.trim() == req.params.productId) {
                        product_info.quantity_sold += line.quantity;
                        product_info.total_price += line.quantity * line.unitPrice.amount;
                    }
                });
            });
            return res.send(product_info);
        } catch (err) {
            console.log(body);
            console.log('Error at product/{id}/sales');
            res.status(400);
            return res.send({});
        }
    });
});

router.get('/:productId/chart', function(req, res, next) {
    if(req.app.get('api_token') == null)
        return res.send('Error');
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/billing/invoices',
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function(error, response, body) {
        let quantityPerMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        try {
            let invoices = JSON.parse(body);
            invoices.forEach((invoice) => {
                invoice.documentLines.forEach((line) => {
                    if(line.salesItem.trim() == req.params.productId) {
                        let month = parseInt(invoice.documentDate.substring(5, 7));
                        quantityPerMonth[month] += line.quantity;
                    }
                });
            });
            return res.send(quantityPerMonth);
        } catch(err) {
            console.log(body);
            console.log('Error at product/{id}/sales');
            res.status(400);
            return res.send([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        }
    });
});

module.exports = router;