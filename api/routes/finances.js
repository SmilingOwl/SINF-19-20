var express = require('express');
var router = express.Router();

router.get('/balance-sheet', function(req, res, next) {
    let balance_sheet = [{
        index: 11,
        description: 'Caixa',
        type: 'asset'
    }, {
        index: 12,
        description: 'Depósitos à Ordem',
        type: 'asset'
    }, {
        index: 13,
        description: 'Outros Depósitos',
        type: 'asset'
    }, {
        index: 21,
        description: 'Clientes',
        type: 'asset'
    }, {
        index: 22,
        description: 'Fornecedores',
        type: 'liability'
    }, {
        index: 23,
        description: 'Pessoal',
        type: 'liability'
    }, {
        index: 24,
        description: 'Estado e Outros Entes Públicos',
        type: 'liability'
    }, {
        index: 31,
        description: 'Compras',
        type: 'liability'
    }, {
        index: 32,
        description: 'Mercadorias',
        type: 'asset'
    }, {
        index: 33,
        description: 'Matérias-Primas',
        type: 'asset'
    }, {
        index: 34,
        description: 'Produtos Acabados e Intermédios',
        type: 'asset'
    }, {
        index: 36,
        description: 'Produtos e Trabalhos em Curso',
        type: 'asset'
    }, {
        index: 51,
        description: 'Equity',
        type: 'equity'
    }, {
        index: 61,
        description: 'Custo de Mercadorias Vendidas',
        type: 'liability'
    }, {
        index: 62,
        description: 'Serviços Externos',
        type: 'liability'
    }, {
        index: 64,
        description: 'Depreciação e Amortização',
        type: 'liability'
    }, {
        index: 681,
        description: 'Impostos e Taxas',
        type: 'liability'
    }, {
        index: 691,
        description: 'Juros',
        type: 'liability'
    }, {
        index: 71,
        description: 'Vendas',
        type: 'asset'
    }, {
        index: 72,
        description: 'Prestação de Serviços',
        type: 'asset'
    }];
    for(let i = 0; i < balance_sheet.length; i++) {
        balance_sheet[i].credit = 0;
        balance_sheet[i].debit = 0;
    }

    process_accounts(balance_sheet, req);
    res.send(balance_sheet);
});

function process_accounts(balance_sheet, req) {
    let json = JSON.parse(req.app.get('json'));
    let journals = json.AuditFile.GeneralLedgerEntries.Journal;
    journals.forEach(journal => {
        if (Array.isArray(journal.Transaction)) {
            journal.Transaction.forEach(transaction => process_transaction(transaction, balance_sheet));
        } else if (journal.Transaction) {
            process_transaction(journal.Transaction, balance_sheet);
        }
    });
}

function process_transaction(transaction, balance_sheet) {
    if (transaction.Lines.CreditLine && Array.isArray(transaction.Lines.CreditLine)) {
        let credit_lines = transaction.Lines.CreditLine;
        credit_lines.forEach(credit_line => {
            let element = balance_sheet.filter(p => p.index == credit_line.AccountID.substring(0, 2));
            if(element.length > 0) element[0].credit += parseInt(credit_line.CreditAmount);
        });
    } else if (transaction.Lines.CreditLine) {
        let element = balance_sheet.filter(p => p.index == transaction.Lines.CreditLine.AccountID.substring(0, 2));
        if(element.length > 0) element[0].credit += parseInt(transaction.Lines.CreditLine.CreditAmount);
    }

    if (transaction.Lines.DebitLine && Array.isArray(transaction.Lines.DebitLine)) {
        let debit_lines = transaction.Lines.DebitLine;
        debit_lines.forEach(debit_line => {
            let element = balance_sheet.filter(p => p.index == debit_line.AccountID.substring(0, 2));
            if(element.length > 0) element[0].debit += parseInt(debit_line.DebitAmount);
        });
    } else if (transaction.Lines.DebitLine) {
        let element = balance_sheet.filter(p => p.index == transaction.Lines.DebitLine.AccountID.substring(0, 2));
        if(element.length > 0) element[0].debit += parseInt(transaction.Lines.DebitLine.DebitAmount);
    }
}

module.exports = router;