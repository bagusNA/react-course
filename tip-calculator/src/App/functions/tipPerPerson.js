export default function tipPerPerson(bill, tipPercent, nPeople) {
  bill = parseInt(bill);
  nPeople = parseInt(nPeople);
  tipPercent = parseInt(tipPercent);

  let total = (bill * tipPercent / 100) / nPeople;

  return Number.isInteger(total) ? total : total.toFixed(2);
}