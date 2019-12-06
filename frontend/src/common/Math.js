const getSales = (balanceSheet) => {
  const sales = balanceSheet.filter((p) => p.index === 71);
  if (sales.length === 0) return 0;
  return Math.abs(sales[0].debit - sales[0].credit);
};
const getCOGS = (balanceSheet) => {
  const cogs = balanceSheet.filter((p) => p.index === 61);
  if (cogs.length === 0) return 0;
  return Math.abs(cogs[0].credit - cogs[0].debit);
};
const getExpenses = (balanceSheet) => {
  let earningsServices = balanceSheet.filter((p) => p.index === 72);
  let expensesServices = balanceSheet.filter((p) => p.index === 62);
  let expensesPersonnel = balanceSheet.filter((p) => p.index === 63);
  if (earningsServices.length === 0) earningsServices = 0;
  else earningsServices = earningsServices[0].debit - earningsServices[0].credit;
  if (expensesServices.length === 0) expensesServices = 0;
  else expensesServices = expensesServices[0].credit - expensesServices[0].debit;
  if (expensesPersonnel.length === 0) expensesPersonnel = 0;
  else expensesPersonnel = expensesPersonnel[0].credit - expensesPersonnel[0].debit;

  return Math.abs(earningsServices - expensesServices - expensesPersonnel);
};
const getDepreciationAmortization = (balanceSheet) => {
  const depreciationAmortization = balanceSheet.filter((p) => p.index === 64);
  if (depreciationAmortization.length === 0) return 0;
  return Math.abs(depreciationAmortization[0].credit - depreciationAmortization[0].debit);
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
export {
  getSales, getCOGS, getExpenses, getDepreciationAmortization, getInterestTaxes, getEquity,
};
