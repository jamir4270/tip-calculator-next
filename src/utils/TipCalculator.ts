export default function TipCalculator(
  bill: number,
  tip: number,
  numOfPeople: number
) {
  const totalTip = bill * (tip / 100);
  let tipPerPerson = parseFloat((totalTip / numOfPeople).toFixed(2));
  let totalPerPerson = parseFloat(((bill + totalTip) / numOfPeople).toFixed(2));

  tipPerPerson =
    Number.isNaN(tipPerPerson) || tipPerPerson === Infinity
      ? 0.0
      : tipPerPerson;
  totalPerPerson =
    Number.isNaN(totalPerPerson) || totalPerPerson === Infinity
      ? 0.0
      : totalPerPerson;
  return { tipPerPerson, totalPerPerson };
}
