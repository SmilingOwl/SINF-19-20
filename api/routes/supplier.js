var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:id', function (req, res, next) {
    if (req.app.get('api_token') == null) {
        res.status(400);
        return res.send('Error');
    }
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/purchasesCore/supplierParties/' + req.params.id,
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function (error, response, body) {
        return res.send(body);
    });
});

router.get('/:taxId/products', function (req, res, next) {
    if (req.app.get('api_token') == null)
        return res.send('Error');
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/invoiceReceipt/invoices',
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function (error, response, body) {
        try {
            let total_units = 0;
            let total_spent = 0;
            let products = {};
            let invoices = JSON.parse(body);

            invoices.forEach(invoice => {
                let json = JSON.parse(req.app.get('json'));
                let year = json.AuditFile.Header.FiscalYear;
                if(invoice.documentDate.substring(0, 4) == year) {
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
                }
            });
            let products_info = {
                products: products,
                total_units: total_units,
                total_spent: total_spent,
            };

            return res.send(products_info);
        } catch(err) {
            console.log('Error at suppliers/{id}/products');
            res.status(400);
            return res.send({});
        }
    });
});

module.exports = router;