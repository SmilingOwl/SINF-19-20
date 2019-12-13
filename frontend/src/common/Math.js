const getSales = (balanceSheet) => {
  const sales = balanceSheet.filter((p) => p.index === 71);
  if (sales.length === 0) return 0;
  return Math.abs(sales[0].credit - sales[0].debit);
};
const getCOGS = (balanceSheet) => {
  const cogs = balanceSheet.filter((p) => p.index === 61);
  if (cogs.length === 0) return 0;
  return Math.abs(cogs[0].debit - cogs[0].credit);
};
const getExpenses = (balanceSheet) => {
  let earningsServices = balanceSheet.filter((p) => p.index === 72);
  let expensesServices = balanceSheet.filter((p) => p.index === 62);
  let expensesPersonnel = balanceSheet.filter((p) => p.index === 63);
  if (earningsServices.length === 0) earningsServices = 0;
  else earningsServices = Math.abs(earningsServices[0].credit - earningsServices[0].debit);
  if (expensesServices.length === 0) expensesServices = 0;
  else expensesServices = Math.abs(expensesServices[0].debit - expensesServices[0].credit);
  if (expensesPersonnel.length === 0) expensesPersonnel = 0;
  else expensesPersonnel = Math.abs(expensesPersonnel[0].debit - expensesPersonnel[0].credit);

  return -earningsServices + expensesServices + expensesPersonnel;
};
const getDepreciationAmortization = (balanceSheet) => {
  const depreciationAmortization = balanceSheet.filter((p) => p.index === 64);
  if (depreciationAmortization.length === 0) return 0;
  return Math.abs(depreciationAmortization[0].debit - depreciationAmortization[0].credit);
};

const getInterestTaxes = (balanceSheet) => {
  const interest = balanceSheet.filter((p) => p.index === 691);
  const taxes = balanceSheet.filter((p) => p.index === 681);
  let interestCount = 0;
  if (interest.length !== 0) interestCount = interest[0].credit - interest[0].debit;
  if (taxes.length === 0) return Math.abs(interestCount);
  return Math.abs(interestCount + taxes[0].credit - taxes[0].debit);
};

const getEquity = (balanceSheet) => {
  const equity = balanceSheet.filter((p) => p.index === 51);
  if (equity.length === 0) return 0;
  return Math.abs(equity[0].credit - equity[0].debit);
};

const getAccountsReceivable = (balanceSheet) => {
  let ar = balanceSheet.filter(p => p.index === 21);
  if(ar.length === 0) return 0;
  return Math.abs(ar[0].debit - ar[0].credit);
};

const getAccountsPayable = (balanceSheet) => {
  let ap = balanceSheet.filter(p => p.index === 22);
  if(ap.length === 0) return 0;
  return Math.abs(ap[0].credit - ap[0].debit);
};

const numberWithSpaces = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export {
  getSales, getCOGS, getExpenses, getDepreciationAmortization, getInterestTaxes, getEquity, getAccountsReceivable, getAccountsPayable,
  numberWithSpaces,
};
