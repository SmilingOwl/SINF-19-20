var express = require('express');
var router = express.Router();

router.get('/balance-sheet', function(req, res, next) {
    let balance_sheet = [{
        index: 'A00101',
        description: 'Ativos Fixos Tangíveis',
        accounts: {
            sum: [268, 269, 270, 271, 272, 273, 274, 306, 310],
            sub: [275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 314, 318],
            dev: [],
            cred: [],
        },
        type: 'non_current_asset',
        value: 0,
    }, {
        index: 'A00102',
        description: 'Propriedades de Investimento',
        accounts: {
            sum: [259, 260, 261, 305, 309],
            sub: [262, 263, 264, 265, 266, 267, 313, 317],
            dev: [],
            cred: [],
        },
        type: 'non_current_asset',
        value: 0,
    }, {
        index: 'A00103',
        description: 'Goodwill',
        accounts: {
            sum: [217, 222, 227, 289],
            sub: [236, 237, 238, 240, 245, 250, 294, 299],
            dev: [],
            cred: [],
        },
        type: 'non_current_asset',
        value: 0,
    }, {
        index: 'A00104',
        description: 'Ativos intangíveis',
        accounts: {
            sum: [290, 291, 292, 293, 307, 311],
            sub: [295, 296, 297, 298, 300, 301, 302, 303, 315, 319],
            dev: [],
            cred: [],
        },
        type: 'non_current_asset',
        value: 0,
    }, {
        index: 'A00105',
        description: 'Ativos biológicos',
        accounts: {
            sum: [197, 198, 215],
            sub: [200, 202],
            dev: [],
            cred: [],
        },
        type: 'non_current_asset',
        value: 0,
    }, {
        index: 'A00106',
        description: 'Participações financeiras',
        accounts: {
            sum: [216, 221, 226],
            sub: [239, 244, 249],
            dev: [],
            cred: [],
        },
        type: 'non_current_asset',
        value: 0,
    }, {
        index: 'A00107',
        description: 'Outros investimentos financeiros',
        accounts: {
            sum: [218, 219, 220, 223, 224, 225, 228, 229, 230, 231, 232, 233, 234, 235, 304, 308],
            sub: [241, 242, 243, 246, 247, 248, 251, 252, 253, 254, 255, 256, 257, 258, 312, 316],
            dev: [],
            cred: [],
        },
        type: 'non_current_asset',
        value: 0,
    }, {
        index: 'A00108',
        description: 'Créditos a receber',
        accounts: {
            sum: [112, 129],
            sub: [68, 70, 121, 123, 141, 145],
            dev: [62, 64, 114, 125, 127, 139], //sum
            cred: [],
        },
        type: 'non_current_asset',
        value: 0,
    }, {
        index: 'A00109',
        description: 'Ativos por impostos diferidos',
        accounts: {
            sum: [133],
            sub: [143],
            dev: [],
            cred: [],
        },
        type: 'non_current_asset',
        value: 0,
    }, {
        index: 'A00113',
        description: 'Inventários',
        accounts: {
            sum: [165, 166, 167, 171, 172, 173, 174, 175, 176, 183, 184, 187, 188, 189, 193, 209, 210, 211, 212, 213],
            sub: [168, 169, 170, 177, 178, 179, 180, 181, 182, 185, 186, 190, 191, 192, 194],
            dev: [],
            cred: [],
        },
        type: 'current_asset',
        value: 0,
    }, {
        index: 'A00114',
        description: 'Ativos biológicos',
        accounts: {
            sum: [195, 196, 214],
            sub: [199, 201],
            dev: [],
            cred: [],
        },
        type: 'current_asset',
        value: 0,
    }, {
        index: 'A00115',
        description: 'Clientes',
        accounts: {
            sum: [],
            sub: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
            dev: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
            cred: [],
        },
        type: 'current_asset',
        value: 0,
    }, {
        index: 'A00116',
        description: 'Estado e outros entes públicos',
        accounts: {
            sum: [73, 74, 79, 80],
            sub: [],
            dev: [71, 76, 77, 81, 82, 83, 84, 85],
            cred: [],
        },
        type: 'current_asset',
        value: 0,
    }, {
        index: 'A00117',
        description: 'Capital subscrito e não realizado',
        accounts: {
            sum: [106, 107],
            sub: [115, 116],
            dev: [],
            cred: [],
        },
        type: 'current_asset',
        value: 0,
    }, {
        index: 'A00118',
        description: 'Outros créditos a receber',
        accounts: {
            sum: [51, 55, 56, 108, 111, 128, 130],
            sub: [52, 65, 66, 67, 69, 117, 118, 119, 120, 122, 140, 142, 144],
            dev: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 61, 63, 109, 110, 113, 124, 126, 138],
            cred: [],
        },
        type: 'current_asset',
        value: 0,
    }, {
        index: 'A00119',
        description: 'Diferimentos',
        accounts: {
            sum: [146],
            sub: [],
            dev: [],
            cred: [],
        },
        type: 'current_asset',
        value: 0,
    }, {
        index: 'A00120',
        description: 'Ativos financeiros detidos para negociação',
        accounts: {
            sum: [4, 6],
            sub: [],
            dev: [],
            cred: [],
        },
        type: 'current_asset',
        value: 0,
    }, {
        index: 'A00121',
        description: 'Outros ativos financeiros',
        accounts: {
            sum: [8],
            sub: [],
            dev: [],
            cred: [],
        },
        type: 'current_asset',
        value: 0,
    }, {
        index: 'A00122',
        description: 'Ativos não correntes detidos para venda',
        accounts: {
            sum: [320, 321, 322, 323, 324],
            sub: [326, 327, 328, 329, 330],
            dev: [],
            cred: [],
        },
        type: 'current_asset',
        value: 0,
    }, {
        index: 'A00124',
        description: 'Caixa e depósitos bancários',
        accounts: {
            sum: [1],
            sub: [],
            dev: [2, 3],
            cred: [],
        },
        type: 'current_asset',
        value: 0,
    }, {
        index: 'A00127',
        description: 'Capital subscrito',
        accounts: {
            sum: [331],
            sub: [],
            dev: [],
            cred: [],
        },
        type: 'equitity',
        value: 0,
    }, {
        index: 'A00128',
        description: 'Ações (quotas) próprias',
        accounts: {
            sum: [],
            sub: [332],
            dev: [333], //sub
            cred: [333], //sum
        },
        type: 'equitity',
        value: 0,
    }, {
        index: 'A00129',
        description: 'Outros instrumentos de capital próprio',
        accounts: {
            sum: [334],
            sub: [],
            dev: [],
            cred: [],
        },
        type: 'equitity',
        value: 0,
    }, {
        index: 'A00130',
        description: 'Prémios de emissão',
        accounts: {
            sum: [335],
            sub: [],
            dev: [],
            cred: [],
        },
        type: 'equitity',
        value: 0,
    }, {
        index: 'A00131',
        description: 'Reservas legais',
        accounts: {
            sum: [336],
            sub: [],
            dev: [],
            cred: [],
        },
        type: 'equitity',
        value: 0,
    }, {
        index: 'A00132',
        description: 'Outras reservas',
        accounts: {
            sum: [337],
            sub: [],
            dev: [],
            cred: [],
        },
        type: 'equitity',
        value: 0,
    }, {
        index: 'A00133',
        description: 'Resultados transitados',
        accounts: {
            sum: [],
            sub: [],
            dev: [338], //sub
            cred: [338], //sum
        },
        type: 'equitity',
        value: 0,
    }, {
        index: 'A00134',
        description: 'Excedentes de revalorização',
        accounts: {
            sum: [345],
            sub: [343, 344, 346],
            dev: [338], //sub
            cred: [338], //sum
        },
        type: 'equitity',
        value: 0,
    }, {
        index: 'A00135',
        description: 'Ajustamentos no capital próprio',
        accounts: {
            sum: [340, 349, 351],
            sub: [],
            dev: [339, 341, 342, 347, 348, 352], //sub
            cred: [339, 341, 342, 347, 348, 352], //sum
        },
        type: 'equitity',
        value: 0,
    }, {
        index: 'A00137',
        description: 'Resultado líquido do período',
        accounts: {
            sum: [],
            sub: [],
            dev: [646], //sub
            cred: [646], //sum
        },
        type: 'equitity',
        value: 0,
    }, {
        index: 'A00138',
        description: 'Dividendos antecipados',
        accounts: {
            sum: [],
            sub: [647],
            dev: [],
            cred: [],
        },
        type: 'equitity',
        value: 0,
    }, {
        index: 'A00140',
        description: 'Provisões',
        accounts: {
            sum: [148, 149, 150, 151, 152, 153, 154, 155],
            sub: [],
            dev: [],
            cred: [],
        },
        type: 'non_current_liability',
        value: 0,
    }, {
        index: 'A00141',
        description: 'Financiamentos obtidos',
        accounts: {
            sum: [87, 89, 91, 93, 95, 97, 99, 101, 103, 105],
            sub: [],
            dev: [],
            cred: [],
        },
        type: 'non_current_liability',
        value: 0,
    }, {
        index: 'A00142',
        description: 'Responsabilidades por benefícios pós-emprego',
        accounts: {
            sum: [132],
            sub: [],
            dev: [],
            cred: [],
        },
        type: 'non_current_liability',
        value: 0,
    }, {
        index: 'A00143',
        description: 'Passivos por impostos diferidos',
        accounts: {
            sum: [134],
            sub: [],
            dev: [],
            cred: [],
        },
        type: 'non_current_liability',
        value: 0,
    }, {
        index: 'A00144',
        description: 'Outras dívidas a pagar',
        accounts: {
            sum: [58, 60, 136],
            sub: [],
            dev: [],
            cred: [62, 64, 114, 125, 127, 139], //sum
        },
        type: 'non_current_liability',
        value: 0,
    }, {
        index: 'A00146',
        description: 'Fornecedores',
        accounts: {
            sum: [],
            sub: [],
            dev: [],
            cred: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], //sum
        },
        type: 'current_liability',
        value: 0,
    }, {
        index: 'A00147',
        description: 'Adiantamentos de clientes',
        accounts: {
            sum: [23, 137],
            sub: [],
            dev: [],
            cred: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], //sum
        },
        type: 'current_liability',
        value: 0,
    }, {
        index: 'A00148',
        description: 'Estado e outros entes públicos',
        accounts: {
            sum: [72, 75, 78],
            sub: [],
            dev: [],
            cred: [71, 76, 77, 81, 82, 83, 84, 85], //sum
        },
        type: 'current_liability',
        value: 0,
    }, {
        index: 'A00149',
        description: 'Financiamentos obtidos',
        accounts: {
            sum: [86, 88, 90, 92, 94, 96, 98, 100, 102, 104],
            sub: [],
            dev: [],
            cred: [2, 3], //sum
        },
        type: 'current_liability',
        value: 0,
    }, {
        index: 'A00150',
        description: 'Outras dívidas a pagar',
        accounts: {
            sum: [53, 54, 57, 59, 131, 135],
            sub: [],
            dev: [],
            cred: [61, 63, 109, 110, 113, 124, 126, 138], //sum
        },
        type: 'current_liability',
        value: 0,
    }, {
        index: 'A00151',
        description: 'Diferimentos',
        accounts: {
            sum: [147],
            sub: [],
            dev: [],
            cred: [], //sum
        },
        type: 'current_liability',
        value: 0,
    }, {
        index: 'A00152',
        description: 'Passivos fi nanceiros detidos para negociação',
        accounts: {
            sum: [5, 7],
            sub: [],
            dev: [],
            cred: [], //sum
        },
        type: 'current_liability',
        value: 0,
    }, {
        index: 'A00153',
        description: 'Outros passivos financeiros',
        accounts: {
            sum: [9],
            sub: [],
            dev: [],
            cred: [], //sum
        },
        type: 'current_liability',
        value: 0,
    }, {
        index: 'A00154',
        description: 'Passivos não correntes detidos para venda',
        accounts: {
            sum: [325],
            sub: [],
            dev: [],
            cred: [], //sum
        },
        type: 'current_liability',
        value: 0,
    }];

    process_accounts(balance_sheet, req);
    calculate_results(balance_sheet);
    console.log(balance_sheet);
    
    return res.send(balance_sheet);
});

function process_accounts(balance_sheet, req) {
    let json = JSON.parse(req.app.get('json'));
    if(!json.AuditFile.MasterFiles.GeneralLedgerAccounts)
        return;
    let accounts = json.AuditFile.MasterFiles.GeneralLedgerAccounts.Account;
    accounts.forEach((account) => {
        let account_debit = parseInt(account.ClosingDebitBalance - account.OpeningDebitBalance);
        let account_credit = parseInt(account.ClosingCreditBalance - account.OpeningCreditBalance);
        let value = Math.abs(account_debit - account_credit);
        balance_sheet.forEach((element)=> {
            if(element.accounts.sum.indexOf(parseInt(account.TaxonomyCode)) !== -1) {
                element.value += value;
            } else if(element.accounts.sub.indexOf(parseInt(account.TaxonomyCode)) !== -1) {
                element.value -= value;
            } else if (element.accounts.dev.indexOf(parseInt(account.TaxonomyCode)) !== -1 && account_debit > account_credit) {
                if(element.type === 'equitity') {
                    element.value -= value;
                } else {
                    element.value += value;
                }
            } else if (element.accounts.cred.indexOf(parseInt(account.TaxonomyCode)) !== -1 && account_credit > account_debit) {
                element.value += value;
            }
        });
    });
}

function calculate_results(balance_sheet) {
    balance_sheet.push({
        index: 'A00112',
        description: 'Total do Ativo Não Corrente',
        value: sum(balance_sheet, 'non_current_asset'),
        type: 'total_asset',
    });
    balance_sheet.push({
        index: 'A00125',
        description: 'Total do Ativo Corrente',
        value: sum(balance_sheet, 'current_asset'),
        type: 'total_asset',
    });
    balance_sheet.push({
        index: 'A00126',
        description: 'Total do Ativo',
        value: sum(balance_sheet, 'total_asset'),
        type: 'total_asset',
    });
    balance_sheet.push({
        index: 'A00139',
        description: 'Total do Capital Próprio',
        value: sum(balance_sheet, 'equitity'),
        type: 'total_equitity',
    });
    balance_sheet.push({
        index: 'A00145',
        description: 'Total do Passivo Não corrente',
        value: sum(balance_sheet, 'non_current_liability'),
        type: 'total_liability',
    });
    balance_sheet.push({
        index: 'A00139',
        description: 'Total do Passivo Corrente',
        value: sum(balance_sheet, 'current_liability'),
        type: 'total_liability',
    });
    balance_sheet.push({
        index: 'A00139',
        description: 'Total do Passivo',
        value: sum(balance_sheet, 'total_liability'),
        type: 'total_liability',
    });
}

function sum(balance_sheet, type) {
    let value = 0;
    balance_sheet.forEach((element) => {
        if(element.type === type) {
            value += element.value;
        }
    });
    return value;
}
/*
function process_accounts(balance_sheet, req, sales_over_time) {
    let json = JSON.parse(req.app.get('json'));
    let journals = json.AuditFile.GeneralLedgerEntries.Journal;
    journals.forEach(journal => {
        if (Array.isArray(journal.Transaction)) {
            journal.Transaction.forEach(transaction => process_transaction(transaction, balance_sheet, sales_over_time));
        } else if (journal.Transaction) {
            process_transaction(journal.Transaction, balance_sheet, sales_over_time);
        }
    });
}

function process_transaction(transaction, balance_sheet, sales_over_time) {
    if (transaction.Lines.CreditLine && Array.isArray(transaction.Lines.CreditLine)) {
        let credit_lines = transaction.Lines.CreditLine;
        credit_lines.forEach(credit_line => {
            let element = balance_sheet.filter(p => p.index == credit_line.AccountID.substring(0, 2));
            if(element.length > 0) {
                element[0].credit += parseInt(credit_line.CreditAmount);
                if(element[0].index === 71) {
                    let month = parseInt(transaction.TransactionDate.substring(5, 7));
                    sales_over_time[month] += parseInt(credit_line.CreditAmount);
                }
            }
        });
    } else if (transaction.Lines.CreditLine) {
        let element = balance_sheet.filter(p => p.index == transaction.Lines.CreditLine.AccountID.substring(0, 2));
        if(element.length > 0) {
            element[0].credit += parseInt(transaction.Lines.CreditLine.CreditAmount);
            if(element[0].index === 71) {
                let month = parseInt(transaction.TransactionDate.substring(5, 7));
                sales_over_time[month] += parseInt(transaction.Lines.CreditLine.CreditAmount);
            }
        }
    }

    if (transaction.Lines.DebitLine && Array.isArray(transaction.Lines.DebitLine)) {
        let debit_lines = transaction.Lines.DebitLine;
        debit_lines.forEach(debit_line => {
            let element = balance_sheet.filter(p => p.index == debit_line.AccountID.substring(0, 2));
            if(element.length > 0){
                element[0].debit += parseInt(debit_line.DebitAmount);
                if(element[0].index === 71) {
                    let month = parseInt(transaction.TransactionDate.substring(5, 7));
                    sales_over_time[month] -= parseInt(debit_line.DebitAmount);
                }
            }
        });
    } else if (transaction.Lines.DebitLine) {
        let element = balance_sheet.filter(p => p.index == transaction.Lines.DebitLine.AccountID.substring(0, 2));
        if(element.length > 0){
            element[0].debit += parseInt(transaction.Lines.DebitLine.DebitAmount);
            if(element[0].index === 71) {
                let month = parseInt(transaction.TransactionDate.substring(5, 7));
                sales_over_time[month] -= parseInt(transaction.Lines.DebitLine.DebitAmount);
            }
        }
    }
}*/

module.exports = router;