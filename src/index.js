var isValidIsbn = function isValidIsbn(strIsbn, callback) {

  var check,
    digit,
    i,
    result,
    sum,
    weight;

  var str = strIsbn.replace(/[^0-9X]/gi, '');

  if (str.length !== 10 && str.length !== 13) {
    result = false;
  }

  if (str.length === 13) {
    sum = 0;
    for (i = 0; i < 12; i++) {
      digit = parseInt(str[i], 10);
      if (i % 2 === 1) {
        sum += 3 * digit;
      } else {
        sum += digit;
      }
    }
    check = (10 - sum % 10) % 10;
    result = check === parseInt(str[str.length - 1], 10);
  }

  if (str.length === 10) {
    weight = 10;
    sum = 0;
    for (i = 0; i < 9; i++) {
      digit = parseInt(str[i], 10);
      sum += weight * digit;
      weight--;
    }
    check = 11 - sum % 11;
    if (check === 10) {
      check = 'X';
    }
    result = check.toString() === str[str.length - 1].toUpperCase();
  }

  callback(null, result);
};

module.exports = {
  isValidIsbn
};
