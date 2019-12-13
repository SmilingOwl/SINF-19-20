var express = require('express');
var router = express.Router();


/************************************ Balance Sheet ************************************/

router.get('/balance-sheet', function(req, res, next) {
    let balance_sheet = {
        non_current_assets: [
            {
                index: 'A00101',
                description: 'Ativos Fixos Tangíveis',
                accounts: {
                    sum: [268, 269, 270, 271, 272, 273, 274, 306, 310],
                    sub: [275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 314, 318],
                    dev: [],
                    cred: [],
                },
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
                value: 0,
            }
        ],
        current_assets: [
            {
                index: 'A00113',
                description: 'Inventários',
                accounts: {
                    sum: [165, 166, 167, 171, 172, 173, 174, 175, 176, 183, 184, 187, 188, 189, 193, 209, 210, 211, 212, 213],
                    sub: [168, 169, 170, 177, 178, 179, 180, 181, 182, 185, 186, 190, 191, 192, 194],
                    dev: [],
                    cred: [],
                },
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
                value: 0,
            }
        ],
        equitity: [
            {
                index: 'A00127',
                description: 'Capital subscrito',
                accounts: {
                    sum: [331],
                    sub: [],
                    dev: [],
                    cred: [],
                },
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
                value: 0,
            }, {
                index: 'A00134',
                description: 'Excedentes de revalorização',
                accounts: {
                    sum: [343, 345],
                    sub: [344, 346],
                    dev: [], //sub
                    cred: [], //sum
                },
                value: 0,
            }, {
                index: 'A00135',
                description: 'Ajustamentos no capital próprio',
                accounts: {
                    sum: [340, 349, 351],
                    sub: [350],
                    dev: [339, 341, 342, 347, 348, 352], //sub
                    cred: [339, 341, 342, 347, 348, 352], //sum
                },
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
                value: 0,
            }
        ],
        non_current_liabilities: [
            {
                index: 'A00140',
                description: 'Provisões',
                accounts: {
                    sum: [148, 149, 150, 151, 152, 153, 154, 155],
                    sub: [],
                    dev: [],
                    cred: [],
                },
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
                value: 0,
            }
        ],
        current_liabilities: [
            {
                index: 'A00146',
                description: 'Fornecedores',
                accounts: {
                    sum: [],
                    sub: [],
                    dev: [],
                    cred: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], //sum
                },
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
                value: 0,
            }, {
                index: 'A00152',
                description: 'Passivos financeiros detidos para negociação',
                accounts: {
                    sum: [5, 7],
                    sub: [],
                    dev: [],
                    cred: [], //sum
                },
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
                value: 0,
            }
        ],
        total_assets: [],
        total_liabilities: [],
        total_equitity: null,
    };
    try {
        let taxonomies = {};
        process_taxonomies(taxonomies, req);
        
        process_accounts(balance_sheet, taxonomies);
        calculate_results(balance_sheet);
        
        return res.send(balance_sheet);
    } catch(err) {
        console.log('Error at finances/balance-sheet');
        res.status(400);
        return res.send({});
    }
});

function process_accounts(balance_sheet, taxonomies) {
    balance_sheet.current_assets.forEach((element) => {
        element.accounts.sum.forEach((tax) => {
            if(taxonomies[tax] != null)
                element.value += taxonomies[tax];
        });
        element.accounts.sub.forEach((tax) => {
            if(taxonomies[tax] != null)
                element.value += taxonomies[tax];
        });
        element.accounts.dev.forEach((tax) => {
            if(taxonomies[tax] != null && taxonomies[tax] > 0)
                element.value += taxonomies[tax];
        });
    });
    balance_sheet.non_current_assets.forEach((element) => {
        element.accounts.sum.forEach((tax) => {
            if(taxonomies[tax] != null)
                element.value += taxonomies[tax];
        });
        element.accounts.sub.forEach((tax) => {
            if(taxonomies[tax] != null)
                element.value += taxonomies[tax];
        });
        element.accounts.dev.forEach((tax) => {
            if(taxonomies[tax] != null && taxonomies[tax] > 0)
                element.value += taxonomies[tax];
        });
    });
    balance_sheet.equitity.forEach((element) => {
        element.accounts.sum.forEach((tax) => {
            if(taxonomies[tax] != null)
                element.value += taxonomies[tax];
        });
        element.accounts.sub.forEach((tax) => {
            if(taxonomies[tax] != null)
                element.value += taxonomies[tax];
        });
        element.accounts.dev.forEach((tax) => {
            if(taxonomies[tax] != null && taxonomies[tax] > 0)
                element.value += taxonomies[tax];
        });
        element.accounts.cred.forEach((tax) => {
            if(taxonomies[tax] != null && taxonomies[tax] < 0)
                element.value += taxonomies[tax];
        });
    });
    balance_sheet.current_liabilities.forEach((element) => {
        element.accounts.sum.forEach((tax) => {
            if(taxonomies[tax] != null)
                element.value += taxonomies[tax];
        });
        element.accounts.sub.forEach((tax) => {
            if(taxonomies[tax] != null)
                element.value += taxonomies[tax];
        });
        element.accounts.cred.forEach((tax) => {
            if(taxonomies[tax] != null && taxonomies[tax] < 0)
                element.value += taxonomies[tax];
        });
    });
    balance_sheet.non_current_liabilities.forEach((element) => {
        element.accounts.sum.forEach((tax) => {
            if(taxonomies[tax] != null)
                element.value += taxonomies[tax];
        });
        element.accounts.sub.forEach((tax) => {
            if(taxonomies[tax] != null)
                element.value += taxonomies[tax];
        });
        element.accounts.cred.forEach((tax) => {
            if(taxonomies[tax] != null && taxonomies[tax] < 0)
                element.value += taxonomies[tax];
        });
    });
}

function process_taxonomies(taxonomies, req) {
    let json = JSON.parse(req.app.get('json'));
    let accounts = json.AuditFile.MasterFiles.GeneralLedgerAccounts.Account;
    accounts.forEach((account) => {
        if(account.TaxonomyCode != null) {
            if (taxonomies[parseInt(account.TaxonomyCode)] == null) {
                taxonomies[parseInt(account.TaxonomyCode)] = 
                    parseFloat(account.ClosingDebitBalance) - 
                    parseFloat(account.ClosingCreditBalance) -
                    parseFloat(account.OpeningDebitBalance) + 
                    parseFloat(account.OpeningCreditBalance);
            } else {
                taxonomies[parseInt(account.TaxonomyCode)] += 
                    parseFloat(account.ClosingDebitBalance) - 
                    parseFloat(account.ClosingCreditBalance) -
                    parseFloat(account.OpeningDebitBalance) + 
                    parseFloat(account.OpeningCreditBalance);
            }
        }
    });
}

function calculate_results(balance_sheet) {
    balance_sheet.total_assets.push({
        index: 'A00112',
        description: 'Total do Ativo Não Corrente',
        value: sum(balance_sheet, 'non_current_assets'),
    });
    balance_sheet.total_assets.push({
        index: 'A00125',
        description: 'Total do Ativo Corrente',
        value: sum(balance_sheet, 'current_assets'),
    });
    balance_sheet.total_assets.push({
        index: 'A00126',
        description: 'Total do Ativo',
        value: sum(balance_sheet, 'total_assets'),
    });
    balance_sheet.total_equitity = {
        index: 'A00139',
        description: 'Total do Capital Próprio',
        value: sum(balance_sheet, 'equitity'),
    };
    balance_sheet.total_liabilities.push({
        index: 'A00145',
        description: 'Total do Passivo Não corrente',
        value: sum(balance_sheet, 'non_current_liabilities'),
    });
    balance_sheet.total_liabilities.push({
        index: 'A00157',
        description: 'Total do Passivo Corrente',
        value: sum(balance_sheet, 'current_liabilities'),
    });
    balance_sheet.total_liabilities.push({
        index: 'A00158',
        description: 'Total do Passivo',
        value: sum(balance_sheet, 'total_liabilities'),
    });
}

function sum(balance_sheet, type) {
    let value = 0;
    balance_sheet[type].forEach((element) => {
        value += element.value;
    });
    return value;
}

/************************************ Profit / Loss ************************************/

router.get('/profit-loss', function(req, res, next) {
    let profit_loss_elements = [
        {
            index: 1,
            description: 'Vendas e serviços prestados',
            accounts: {
                sum: [506, 507, 508, 509, 513, 514, 515, 516],
                sub: [511, 512, 518],
                u: [510, 517]
            },
            value: 0,
        },
        {
            index: 2,
            description: 'Subsídios à exploração',
            accounts: {
                sum: [527, 528],
                sub: [],
                u: []
            },
            value: 0,
        },
        {
            index: 3,
            description: 'Ganhos / perdas imputados de subsidiárias, associadas e empreendimentos conjuntos ',
            accounts: {
                sum: [614, 615, 616, 638, 639],
                sub: [479, 480, 481, 482],
                u: []
            },
            value: 0,
        },
        {
            index: 4,
            description: 'Variação nos inventários da produção',
            accounts: {
                sum: [],
                sub: [],
                u: [519, 520, 521, 522]
            },
            value: 0,
        },
        {
            index: 5,
            description: 'Trabalhos para a própria entidade',
            accounts: {
                sum: [523, 524, 525, 526],
                sub: [],
                u: []
            },
            value: 0,
        },
        {
            index: 6,
            description: 'Custo das mercadorias vendidas',
            accounts: {
                sum: [353, 354, 355],
                sub: [],
                u: []
            },
            value: 0,
        },
        {
            index: 7,
            description: 'Fornecimentos e serviços externos',
            accounts: {
                sum: [356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372,
                    373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384],
                sub: [],
                u: []
            },
            value: 0,
        },
        {
            index: 8,
            description: 'Gastos com o pessoal',
            accounts: {
                sum: [385, 386, 389, 390, 391, 392, 393],
                sub: [],
                u: [387, 388]
            },
            value: 0,
        },
        {
            index: 10,
            description: 'Imparidade / ajustamentos de inventários (perdas / reversões) ',
            accounts: {
                sum: [415, 416, 417, 418, 419, 420, 421],
                sub: [549, 550, 551, 552, 553, 554, 555],
                u: []
            },
            value: 0,
        },
        {
            index: 11,
            description: 'Imparidade de dívidas a receber (perdas / reversões)',
            accounts: {
                sum: [413, 414],
                sub: [547, 548],
                u: []
            },
            value: 0,
        },
        {
            index: 12,
            description: 'Provisões (aumentos / reduções)',
            accounts: {
                sum: [463, 464, 465, 466, 467, 468, 469, 470],
                sub: [586, 587, 588, 589, 590, 591, 592, 593],
                u: []
            },
            value: 0,
        },
        {
            index: 13,
            description: 'Imparidade de investimentos não depreciáveis / amortizáveis (perdas / reversões) ',
            accounts: {
                sum: [422, 423, 424, 425, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453],
                sub: [556, 557, 558, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585],
                u: [412]
            },
            value: 0,
        },
        {
            index: 15,
            description: 'Aumentos / reduções de justo valor',
            accounts: {
                sum: [594, 595, 596, 597, 598, 599, 600, 601, 602],
                sub: [454, 455, 456, 457, 458, 459, 460, 461, 462],
                u: []
            },
            value: 0,
        },
        {
            index: 16,
            description: 'Outros rendimentos',
            accounts: {
                sum: [603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 617, 618, 619, 620,
                    621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 636, 637, 640, 642],
                sub: [],
                u: []
            },
            value: 0,
        },
        {
            index: 17,
            description: 'Outros gastos',
            accounts: {
                sum: [471, 472, 473, 474, 475, 476, 477, 478, 483, 484, 485, 486, 487, 488, 489,
                    490, 491, 492, 493, 494, 495, 496, 497, 498, 499],
                sub: [],
                u: []
            },
            value: 0,
        },
        {
            index: 19,
            description: 'Gastos / reversões de depreciação e de amortização',
            accounts: {
                sum: [394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407,
                    408, 409, 410, 411],
                sub: [529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546],
                u: []
            },
            value: 0,
        },
        {
            index: 20,
            description: 'Imparidade de investimentos depreciáveis / amortizáveis (perdas / reversões)',
            accounts: {
                sum: [426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440],
                sub: [559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572],
                u: []
            },
            value: 0,
        },
        {
            index: 22,
            description: 'Juros e rendimentos similares obtidos',
            accounts: {
                sum: [635, 641],
                sub: [],
                u: []
            },
            value: 0,
        },
        {
            index: 23,
            description: 'Juros e gastos similares suportados',
            accounts: {
                sum: [500, 501, 502, 503, 504, 505],
                sub: [],
                u: []
            },
            value: 0,
        },
        {
            index: 25,
            description: 'Imposto sobre o rendimento do período',
            accounts: {
                sum: [644],
                sub: [],
                u: [645]
            },
            value: 0,
        }
    ];
    let ebitda = {
        value: 0,
        sum: [1, 2, 3, 4, 5, 15, 16],
        sub: [6, 7, 8, 9, 10, 11, 12, 13, 14, 17],
    };
    try {
        let taxonomies = {};
        process_taxonomies_entries(taxonomies, req);
        process_accounts_profit_loss(profit_loss_elements, taxonomies);
        calculate_ebitda(ebitda, profit_loss_elements);
        
        let ebit = ebitda.value - profit_loss_elements.filter(p => p.index === 19)[0].value
            - profit_loss_elements.filter(p => p.index === 20)[0].value;
        let ebt = ebit + profit_loss_elements.filter(p => p.index === 22)[0].value
            - profit_loss_elements.filter(p => p.index === 23)[0].value;
        let net_profit = ebt - profit_loss_elements.filter(p => p.index === 25)[0].value;

        let profit_loss = {
            sales: {
                description: 'Vendas e Serviços',
                value: profit_loss_elements.filter(p => p.index === 1)[0].value,
            },
            cogs: {
                description: 'Custo de Mercadorias',
                value: profit_loss_elements.filter(p => p.index === 6)[0].value,
            },
            ebitda: {
                description: 'EBITDA',
                value: ebitda.value,
            },
            ebit: {
                description: 'EBIT',
                value: ebit,
            },
            ebt: {
                description: 'EBT',
                value: ebt,
            },
            net_profit: {
                description: 'Resultado Líquido',
                value: net_profit,
            },
        };
        return res.send(profit_loss);
    } catch(err) {
        console.log('Error at finances/profit-loss');
        res.status(400);
        return res.send({});
    }
});

function process_accounts_profit_loss(profit_loss_elements, taxonomies) {
    profit_loss_elements.forEach((element) => {
        element.accounts.sum.forEach((tax) => {
            if(taxonomies[tax] != null)
                element.value += taxonomies[tax];
        });
        element.accounts.sub.forEach((tax) => {
            if(taxonomies[tax] != null)
                element.value += taxonomies[tax];
        });
        element.accounts.u.forEach((tax) => {
            if(taxonomies[tax] != null)
                element.value += taxonomies[tax];
        });
    });
}

function calculate_ebitda(ebitda, profit_loss_elements) {
    ebitda.sum.forEach((element) => {
        let e = profit_loss_elements.filter(p => p.index === element);
        if(e.length > 0)
            ebitda.value += e[0].value;
    });
    ebitda.sub.forEach((element) => {
        let e = profit_loss_elements.filter(p => p.index === element);
        if(e.length > 0)
            ebitda.value -= e[0].value;
    });
}

function process_taxonomies_entries(taxonomies, req) {
    let json = JSON.parse(req.app.get('json'));
    let accounts = json.AuditFile.MasterFiles.GeneralLedgerAccounts.Account;
    let journals = json.AuditFile.GeneralLedgerEntries.Journal;
    journals.forEach((journal) => {
        if (Array.isArray(journal.Transaction)) {
            journal.Transaction.forEach(transaction => {
                if(transaction.TransactionType !== 'A')
                process_transaction_profit_loss(transaction, accounts, taxonomies)
            });
        } else if (journal.Transaction) {
            if(journal.Transaction.TransactionType !== 'A')
            process_transaction_profit_loss(journal.Transaction, accounts, taxonomies);
        }
    });
}

function process_transaction_profit_loss(transaction, accounts, taxonomies) {
    if (transaction.Lines.CreditLine && Array.isArray(transaction.Lines.CreditLine)) {
        let credit_lines = transaction.Lines.CreditLine;
        credit_lines.forEach(credit_line => {
            let account = accounts.filter(p => p.AccountID === credit_line.AccountID);
            if(account.length > 0 && account[0].TaxonomyCode != null) {
                if(taxonomies[parseInt(account[0].TaxonomyCode)] == null) {
                    taxonomies[parseInt(account[0].TaxonomyCode)] = parseFloat(credit_line.CreditAmount);
                } else {
                    taxonomies[parseInt(account[0].TaxonomyCode)] += parseFloat(credit_line.CreditAmount);
                }
            }
        });
    } else if (transaction.Lines.CreditLine) {
        let account = accounts.filter(p => p.AccountID === transaction.Lines.CreditLine.AccountID);
        if(account.length > 0 && account[0].TaxonomyCode != null) {
            if(taxonomies[parseInt(account[0].TaxonomyCode)] == null) {
                taxonomies[parseInt(account[0].TaxonomyCode)] = parseFloat(transaction.Lines.CreditLine.CreditAmount);
            } else {
                taxonomies[parseInt(account[0].TaxonomyCode)] += parseFloat(transaction.Lines.CreditLine.CreditAmount);
            }
        }
    }
    if (transaction.Lines.DebitLine && Array.isArray(transaction.Lines.DebitLine)) {
        let debit_lines = transaction.Lines.DebitLine;
        debit_lines.forEach(debit_line => {
            let account = accounts.filter(p => p.AccountID === debit_line.AccountID);
            if(account.length > 0 && account[0].TaxonomyCode != null) {
                if(taxonomies[parseInt(account[0].TaxonomyCode)] == null) {
                    taxonomies[parseInt(account[0].TaxonomyCode)] = -parseFloat(debit_line.DebitAmount);
                } else {
                    taxonomies[parseInt(account[0].TaxonomyCode)] -= parseFloat(debit_line.DebitAmount);
                }
            }
        });
    } else if (transaction.Lines.DebitLine) {
        let account = accounts.filter(p => p.AccountID === transaction.Lines.DebitLine.AccountID);
        if(account.length > 0 && account[0].TaxonomyCode != null) {
            if(taxonomies[parseInt(account[0].TaxonomyCode)] == null) {
                taxonomies[parseInt(account[0].TaxonomyCode)] = -parseFloat(transaction.Lines.DebitLine.DebitAmount);
            } else {
                taxonomies[parseInt(account[0].TaxonomyCode)] -= parseFloat(transaction.Lines.DebitLine.DebitAmount);
            }
        }
    }
}

/************************************ Sales Over Time ************************************/

router.get('/sales-over-time', function(req, res, next) {
    let json = JSON.parse(req.app.get('json'));
    let sales = {
        index: 1,
        description: 'Vendas e serviços prestados',
        accounts: {
            sum: [506, 507, 508, 509, 513, 514, 515, 516],
            sub: [511, 512, 518],
            u: [510, 517]
        },
    };
    let sales_over_time = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    try {
        process_sales_over_time_accounts(sales, sales_over_time, json);
        return res.send(sales_over_time);
    } catch(err) {
        console.log('Error at finances/sales-over-time');
        res.status(400);
        return res.send([0,0,0,0,0,0,0,0,0,0,0,0,0]);
    }
});

function process_sales_over_time_accounts(sales, sales_over_time, json) {
    if(!json.AuditFile.MasterFiles.GeneralLedgerAccounts)
        return;
    let entries = json.AuditFile.GeneralLedgerEntries.Journal;
    let accounts = json.AuditFile.MasterFiles.GeneralLedgerAccounts.Account;
    entries.forEach((journal) => {
        if (Array.isArray(journal.Transaction)) {
            journal.Transaction.forEach(transaction => {
                if(transaction.TransactionType !== 'A')
                process_transaction_time(transaction, accounts, sales, sales_over_time)
            });
        } else if (journal.Transaction) {
            if(journal.Transaction.TransactionType !== 'A')
            process_transaction_time(journal.Transaction, accounts, sales, sales_over_time);
        }
    });
}

function process_transaction_time(transaction, accounts, sales, sales_over_time) {
    if (transaction.Lines.CreditLine && Array.isArray(transaction.Lines.CreditLine)) {
        let credit_lines = transaction.Lines.CreditLine;
        credit_lines.forEach(credit_line => {
            let account = accounts.filter(p => p.AccountID === credit_line.AccountID);
            let month = parseInt(transaction.TransactionDate.substring(5, 7));
            if(account.length > 0 && (sales.accounts.sum.indexOf(parseInt(account[0].TaxonomyCode)) !== -1
            || sales.accounts.sub.indexOf(parseInt(account[0].TaxonomyCode)) !== -1
            || sales.accounts.u.indexOf(parseInt(account[0].TaxonomyCode)) !== -1)) {
                sales_over_time[month] += parseFloat(credit_line.CreditAmount);
            } else if(account.length > 0 && sales.accounts.sub.indexOf(parseInt(account[0].TaxonomyCode)) !== -1) {
                sales_over_time[month] += parseFloat(credit_line.CreditAmount);
            }
        });
    } else if (transaction.Lines.CreditLine) {
        let account = accounts.filter(p => p.AccountID === transaction.Lines.CreditLine.AccountID);
        let month = parseInt(transaction.TransactionDate.substring(5, 7));
        if(account.length > 0 && (sales.accounts.sum.indexOf(parseInt(account[0].TaxonomyCode)) !== -1
        || sales.accounts.sub.indexOf(parseInt(account[0].TaxonomyCode)) !== -1
        || sales.accounts.u.indexOf(parseInt(account[0].TaxonomyCode)) !== -1)) {
            sales_over_time[month] += parseFloat(transaction.Lines.CreditLine.CreditAmount);
        } else if(account.length > 0 && sales.accounts.sub.indexOf(parseInt(account[0].TaxonomyCode)) !== -1) {
            sales_over_time[month] += parseFloat(transaction.Lines.CreditLine.CreditAmount);
        }
    }
    if (transaction.Lines.DebitLine && Array.isArray(transaction.Lines.DebitLine)) {
        let debit_lines = transaction.Lines.DebitLine;
        debit_lines.forEach(debit_line => {
            let account = accounts.filter(p => p.AccountID === debit_line.AccountID);
            let month = parseInt(transaction.TransactionDate.substring(5, 7));
            if(account.length > 0 && (sales.accounts.sum.indexOf(parseInt(account[0].TaxonomyCode)) !== -1
            || sales.accounts.sub.indexOf(parseInt(account[0].TaxonomyCode)) !== -1
            || sales.accounts.u.indexOf(parseInt(account[0].TaxonomyCode)) !== -1)) {
                sales_over_time[month] -= parseFloat(debit_line.DebitAmount);
            } else if(account.length > 0 && sales.accounts.sub.indexOf(parseInt(account[0].TaxonomyCode)) !== -1) {
                sales_over_time[month] -= parseFloat(debit_line.DebitAmount);
            }
        });
    } else if (transaction.Lines.DebitLine) {
        let account = accounts.filter(p => p.AccountID === transaction.Lines.DebitLine.AccountID);
        let month = parseInt(transaction.TransactionDate.substring(5, 7));
        if(account.length > 0 && (sales.accounts.sum.indexOf(parseInt(account[0].TaxonomyCode)) !== -1
        || sales.accounts.sub.indexOf(parseInt(account[0].TaxonomyCode)) !== -1
        || sales.accounts.u.indexOf(parseInt(account[0].TaxonomyCode)) !== -1)) {
            sales_over_time[month] -= parseFloat(transaction.Lines.DebitLine.DebitAmount);
        } else if(account.length > 0 && sales.accounts.sub.indexOf(parseInt(account[0].TaxonomyCode)) !== -1) {
            sales_over_time[month] -= parseFloat(transaction.Lines.DebitLine.DebitAmount);
        }
    }
}

module.exports = router;