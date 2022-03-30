export default function validateInt(number, maxLength) {
  let intRegex = /^(0|[1-9]\d*)$/;

  if (maxLength < number.length) {
    return false;
  }

  return intRegex.test(number);
}