
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:productId', function(req, res, next) {
    let json = JSON.parse(req.app.get('json'));
    let product = json.AuditFile.MasterFiles.Product.filter(p => p.ProductCode == req.params.productId);
    product[0].ProductCode = "LENCOS"; //TODO remove
    if(req.app.get('api_token') == null)
        return res.send('Error');
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/salesCore/salesItems/' + product[0].ProductCode,
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function(error, response, body) {
        product[0].api = JSON.parse(body);
        product[0].chartInfo = getProductSalesChart(req.params.productId, json);
        return res.send(product[0]);
    });
});

router.get('/:productId/sales', function(req, res, next) {
    let json = JSON.parse(req.app.get('json'));
    let invoices = json.AuditFile.SourceDocuments.SalesInvoices.Invoice;
    let product_info = {
        quantity_sold: 0,
        total_price: 0,
    };
    for(let i = 0; i < invoices.length; i++) {
        for(let j = 0; j < invoices[i].Line.length; j++) {
            if(invoices[i].Line[j].ProductCode == req.params.productId) {
                product_info.quantity_sold += parseInt(invoices[i].Line[j].Quantity);
                product_info.total_price += parseInt(invoices[i].Line[j].Quantity) * parseFloat(invoices[i].Line[j].UnitPrice);
            }
        }
    }

    return res.send(product_info);
});

function getProductSalesChart(productCode, json) {
    let quantityPerMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let invoices = json.AuditFile.SourceDocuments.SalesInvoices.Invoice;
    for(let i = 0; i < invoices.length; i++) {
        for(let j = 0; j < invoices[i].Line.length; j++) {
            if(invoices[i].Line[j].ProductCode === productCode) {
                let date = invoices[i].InvoiceDate;
                let month = parseInt(date.substring(5, 7));
                quantityPerMonth[month] += parseInt(invoices[i].Line[j].Quantity);
            }
        }
    }
    return quantityPerMonth;
}

module.exports = router;