let isValidIsbn = (strIsbn, callback) => {

  let check,
    digit,
    i,
    result,
    sum,
    weight;

  if (typeof strIsbn !== 'string' && !(strIsbn instanceof String)) {
    return callback('error', 'Input is not a string');
  }

  let str = strIsbn.replace(/[^0-9X]/gi, '');
  let length = str.length;

  if (length === 13) {
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
    result = check === parseInt(str[length - 1], 10);
  } else if (length === 10) {
    weight = 10;
    sum = 0;
    for (i = 0; i < 9; i++) {
      digit = parseInt(str[i], 10);
      sum += weight * digit;
      weight--;
    }
    check = 11 - sum % 11;
    let checkStr;
    if (check === 10) {
      checkStr = 'X';
    } else {
      checkStr = check.toString();
    }
    result = checkStr === str[length - 1].toUpperCase();
  } else {
    result = false;
  }

  return callback(null, result);
};

module.exports = {
  isValidIsbn
};
