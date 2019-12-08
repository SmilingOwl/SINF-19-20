
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/info', function(req, res, next) {
    if(req.app.get('api_token') == null)
        return res.send('Error');
    let authorization = req.app.get('api_token').token_type.concat(" ").concat(req.app.get('api_token').access_token);
    request({
        uri: 'https://my.jasminsoftware.com/api/224974/224974-0001/billing/invoices',
        headers: { 'Content-Type': 'application/json', Authorization: authorization },
        method: "GET",
    }, function(error, response, body) {
        let invoices = JSON.parse(body);
        let customers = [];
        let products = [];
        invoices.forEach(invoice => {
            if(customers[invoice.buyerCustomerPartyName] == null) {
                customers[invoice.buyerCustomerPartyName] = {
                    totalSpent: invoice.grossValue.amount,
                    name: invoice.buyerCustomerPartyName,
                    taxId: invoice.buyerCustomerPartyTaxId,
                    product: null,
                    quantityBought: 0,
                };
            } else {
                customers[invoice.buyerCustomerPartyName].totalSpent += parseFloat(invoice.grossValue.amount);
            }
            invoice.documentLines.forEach(line => {
                if(products[line.salesItem] == null) {
                    products[line.salesItem] = {
                        code: line.salesItem,
                        description: line.description,
                        quantity: line.quantity,
                        totalEarned: line.quantity * line.unitPrice.amount,
                    };
                } else {
                    products[line.salesItem].quantity += line.quantity;
                    products[line.salesItem].totalEarned += line.quantity * line.unitPrice.amount;
                }

                if(customers[invoice.buyerCustomerPartyName][line.salesItem] == null) {
                    customers[invoice.buyerCustomerPartyName][line.salesItem] = {
                        code: line.salesItem,
                        description: line.description,
                        quantity: line.quantity,
                    };
                } else {
                    customers[invoice.buyerCustomerPartyName][line.salesItem].quantity += line.quantity;
                }
            });
        });

        let customers_to_return = [];
        for (let item in customers ){
            customers_to_return.push(customers[item]);
        }

        let products_to_return = [];
        for (let item in products){
            products_to_return.push(products[item]);
        }

        customers_to_return.forEach(customer => {
            customer.quantityBought = 0;
            customer.product = null;
            for(let key in customer) {
                if(!customer.hasOwnProperty(key) || key === 'totalSpent' || key === 'name' || key === 'taxId'
                    || key === 'quantityBought' || key === 'product') continue;
                if(customer[key].quantity > customer.quantityBought) {
                    customer.quantityBought = customer[key].quantity;
                    customer.product = products[key];
                }
            }
        });

        customers_to_return.sort((a, b) => (a.quantityBought < b.quantityBought) ? 1 : -1);
        products_to_return.sort((a, b) => (a.quantity < b.quantity) ? 1 : -1);
        
        sales = {
            customers: customers_to_return,
            products: products_to_return
        }

        return res.send(sales);
    });
});

module.exports = router;