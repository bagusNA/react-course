export default function totalPerPerson(bill, tipPercent, nPeople) {
  bill = parseInt(bill);
  nPeople = parseInt(nPeople);
  tipPercent = parseInt(tipPercent);

  let total = ( bill + (bill * tipPercent / 100) ) / nPeople;

  // Round to 4 decimal places if float
  return Number.isInteger(total) ? total : total.toFixed(2);
}