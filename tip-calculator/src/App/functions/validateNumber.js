export default function validateNumber(string, length, noDecimal) {

    let regExp;

    if ( noDecimal === true ) {
      regExp = /^\d+$/;
    }
    else {
    // allow decimal number (decimal using .)
    regExp = /^\d+\.?\d*$/;
    }

    if ( (string.match(regExp) && string.length <= length)
          || string === '' ) {
      return string;
    } else {
      return false;
    }

}