
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/company_info', function (req, res, next) {
    let json = JSON.parse(req.app.get('json'));
    return res.send(json.AuditFile.Header);
});

router.get('/suppliers/:id', function (req, res, next) {
    if (req.app.get('api_token') == null)
        return res.send('Error');
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/purchasesCore/supplierParties/' + req.params.id,
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function (error, response, body) {
        return res.send(body);
    });
});

router.get('/suppliers/:taxId/products', function (req, res, next) {
    if (req.app.get('api_token') == null)
        return res.send('Error');
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/invoiceReceipt/invoices',
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function (error, response, body) {
        let total_units = 0;
        let total_spent = 0;
        let products = {};
        let invoices = JSON.parse(body);

        invoices.forEach(invoice => {
            if (req.params.taxId == invoice.sellerSupplierPartyTaxId) {

                invoice.documentLines.forEach(line => {

                    if (products[line.purchasesItem] == null) {

                        products[line.purchasesItem] = {
                            product: line.description,
                            unitsBought: line.quantity,
                            pricePerUnit: line.unitPrice.amount,
                        }


                    } else {
                        products[line.purchasesItem].unitsBought += line.quantity;
                    }
                    total_units += products[line.purchasesItem].unitsBought;
                    total_spent += products[line.purchasesItem].unitsBought * products[line.purchasesItem].pricePerUnit;
                });
            }
        });
        let products_info = {
            products: products,
            total_units: total_units,
            total_spent: total_spent,
        };

        return res.send(products_info);
    });
});

router.get('/purchases/', function (req, res, next) {
    if (req.app.get('api_token') == null)
        return res.send('Error');
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/invoiceReceipt/invoices',
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function (error, response, body) {
        let total_spent = 0;
        let invoices = JSON.parse(body);

        invoices.forEach(invoice => {
            total_spent += invoice.payableAmount.amount;
        })
        return res.send({total_spent:total_spent});
    });

});

router.get('/purchases/products', function (req, res, next) {
    if (req.app.get('api_token') == null)
        return res.send('Error');
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/invoiceReceipt/invoices',
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function (error, response, body) {
        let products = [];
        let invoices = JSON.parse(body);
        invoices.forEach(invoice => {
            invoice.documentLines.forEach(line => {
                let product = products.filter(element=> element.code == line.purchasesItem);
                if (product.length == 0 ) {
                   
                    products.push( {
                        code: line.purchasesItem,
                        product: line.description,
                        unitsSold: line.quantity,
                        pricePerUnit: line.unitPrice.amount,  
                        total_earned: line.quantity * line.unitPrice.amount,
                    });
                   
                }else{
                    product[0].unitsSold += line.quantity;
                    product[0].total_earned += line.quantity * line.unitPrice.amount;
                }
                
            });
        });
       products.sort((a,b) => (a.unitsSold < b.unitsSold) ? 1 : -1);
        let data = {
            products: products,
        };
       return res.send(data);
    });

});

router.get('/purchases/suppliers', function (req, res, next) {
    if (req.app.get('api_token') == null)
        return res.send('Error');
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/invoiceReceipt/invoices',
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function (error, response, body) {
        let suppliers = [];
        let invoices = JSON.parse(body);

        invoices.forEach(invoice => {

            suppliers.push([invoice.sellerSupplierPartyTaxId, {
                name: invoice.sellerSupplierPartyDescription,
            }]);

        });
        let data = {
            suppliers: suppliers,
        };
       return res.send(data);
    });
});

module.exports = router;