
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function (req, res, next) {
    if (req.app.get('api_token') == null)
        return res.send('Error');
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/invoiceReceipt/invoices',
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function (error, response, body) {
        try {
            let total_spent = 0;
            let invoices = JSON.parse(body);

            invoices.forEach(invoice => {
                total_spent += invoice.payableAmount.amount;
            })
            return res.send({ total_spent: total_spent });
        } catch(err) {
            console.log(body);
            console.log('Error at purchases');
            res.status(400);
            return res.send({});
        }
    });

});

router.get('/products', function (req, res, next) {
    if (req.app.get('api_token') == null)
        return res.send('Error');
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/invoiceReceipt/invoices',
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function (error, response, body) {
        try {
            let products = [];
            let invoices = JSON.parse(body);
            invoices.forEach(invoice => {
                invoice.documentLines.forEach(line => {
                    let product = products.filter(element => element.code == line.purchasesItem);

                    if (product.length == 0) {

                        products.push({
                            code: line.purchasesItem,
                            product: line.description,
                            unitsSold: line.quantity,
                            totalSpent: line.quantity * line.unitPrice.amount,
                        });

                    } else {
                        product[0].unitsSold += line.quantity;
                        product[0].totalSpent += line.quantity * line.unitPrice.amount;
                    }

                });
            });
            products.sort((a, b) => (a.unitsSold < b.unitsSold) ? 1 : -1);
            let data = {
                products: products,
            };
            return res.send(data);
        } catch(err) {
            console.log(body);
            console.log('Error at purchases/products');
            res.status(400);
            return res.send({});
        }
    });

});

router.get('/suppliers', function (req, res, next) {
    if (req.app.get('api_token') == null)
        return res.send('Error');
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/invoiceReceipt/invoices',
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",

    }, function (error, response, body) {
        try {
            let suppliers = [];
            let sup;
            let totalSpent = 0;
            let invoices = JSON.parse(body);

            invoices.forEach(invoice => {
                let supplier = suppliers.filter(element => element.code == invoice.sellerSupplierPartyTaxId);

                if (supplier.length != 0) {
                    sup = supplier[0];
                } else {
                    suppliers.push({
                        code: invoice.sellerSupplierPartyTaxId,
                        supplier: invoice.sellerSupplierPartyDescription,
                        supplier_id: invoice.sellerSupplierParty,
                        products:[],
                        most_bought_product: '',
                        quantity_bought: 0,
                    });
                    sup = suppliers[suppliers.length-1];
                }

                invoice.documentLines.forEach(line => {
                    let product = sup.products.filter(element => element.code == line.description);
                    
                    if (sup.total_spent == null) {
                    sup.total_spent = line.quantity * line.unitPrice.amount;
                    } else {
                        sup.total_spent += line.quantity * line.unitPrice.amount;
                    }

                    if (product.length == 0) {   
                        sup.products.push({
                            code: line.description,
                            unitsSold: line.quantity,
                        });

                    } else {
                        product[0].unitsSold += line.quantity;  
                    }

                });

            });

            let initialValue;
        
            for( let j=0; j < suppliers.length; j++){
                initialValue = suppliers[j].products[0].unitsSold;
                
                for(let i = 0; i< suppliers[j].products.length; i++){
                    if(initialValue <= suppliers[j].products[i].unitsSold){
                        suppliers[j].most_bought_product = suppliers[j].products[i].code;
                        suppliers[j].quantity_bought = suppliers[j].products[i].unitsSold;
                        initialValue = suppliers[j].products[i].unitsSold;
                    }
                }
            }

            suppliers.sort((a, b) => (a.quantity_bought < b.quantity_bought) ? 1 : -1);
            let data = {
                suppliers: suppliers,
            };
            return res.send(data);
        } catch(err) {
            console.log(body);
            console.log('Error at purchases/suppliers');
            res.status(400);
            return res.send({});
        }
    });
});

module.exports = router;