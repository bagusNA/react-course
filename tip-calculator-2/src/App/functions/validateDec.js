export default function validateDec(number, maxLength) {
  let decRegex = /^\d{1,}(\.\d{0,4})?$/;

  if (maxLength < number.length) {
    return false;
  }

  return decRegex.test(number);
}