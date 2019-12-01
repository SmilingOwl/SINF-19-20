
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/info', function(req, res, next) {
    let json = JSON.parse(req.app.get('json'));
    let customers = json.AuditFile.MasterFiles.Customer;
    let invoices = json.AuditFile.SourceDocuments.SalesInvoices.Invoice;
    let customer_invoice = [];
    let products = json.AuditFile.MasterFiles.Product;
    let product_info = [];
    for(let i = 0; i < invoices.length; i++) {
        if(customer_invoice[invoices[i].CustomerID] == null) {
            customer_invoice[invoices[i].CustomerID] = {
                totalSpent: parseFloat(invoices[i].DocumentTotals.GrossTotal),
            };
        } else {
            customer_invoice[invoices[i].CustomerID].totalSpent += parseFloat(invoices[i].DocumentTotals.GrossTotal);
        }

        for(let j = 0; j < invoices[i].Line.length; j++) {
            if(product_info[invoices[i].Line[j].ProductCode] == null) {
                product_info[invoices[i].Line[j].ProductCode] = {
                    quantity: parseInt(invoices[i].Line[j].Quantity),
                    totalEarned: parseInt(invoices[i].Line[j].Quantity) * parseFloat(invoices[i].Line[j].UnitPrice),
                };
            } else {
                product_info[invoices[i].Line[j].ProductCode].quantity += parseInt(invoices[i].Line[j].Quantity);
                product_info[invoices[i].Line[j].ProductCode].totalEarned += 
                    parseInt(invoices[i].Line[j].Quantity) * parseFloat(invoices[i].Line[j].UnitPrice);
            }
            if(customer_invoice[invoices[i].CustomerID][invoices[i].Line[j].ProductCode] == null) {
                customer_invoice[invoices[i].CustomerID][invoices[i].Line[j].ProductCode] = {
                    description: invoices[i].Line[j].ProductDescription,
                    quantity: parseInt(invoices[i].Line[j].Quantity),
                };
            } else {
                customer_invoice[invoices[i].CustomerID][invoices[i].Line[j].ProductCode].quantity += parseInt(invoices[i].Line[j].Quantity);
            }
        }
    }

    for(let i = 0; i < customers.length; i++) {
        customers[i].totalSpent = customer_invoice[customers[i].CustomerID].totalSpent;
        customers[i].quantityBought = 0;
        customers[i].product = null;
        if(customer_invoice[customers[i].CustomerID] != null)
        for(let key in customer_invoice[customers[i].CustomerID]) {
            if(!customer_invoice[customers[i].CustomerID].hasOwnProperty(key) || key === 'totalSpent') continue;
            if(customer_invoice[customers[i].CustomerID][key].quantity > customers[i].quantityBought) {
                customers[i].quantityBought = customer_invoice[customers[i].CustomerID][key].quantity;
                customers[i].product = customer_invoice[customers[i].CustomerID][key].description;
            }
        }
    }

    for(let i = 0; i < products.length; i++) {
        products[i].totalEarned = product_info[products[i].ProductCode].totalEarned;
        products[i].quantity = product_info[products[i].ProductCode].quantity;
        if(products[i].quantity == null) {
            products[i].quantity = 0;
            products[i].totalEarned = 0;
        }
    }
    customers.sort((a, b) => (a.quantityBought < b.quantityBought) ? 1 : -1);
    products.sort((a,b) => (a.quantity < b.quantity) ? 1 : -1);
    sales = {
        customers: customers,
        products: products
    }
    res.send(sales);
});

module.exports = router;