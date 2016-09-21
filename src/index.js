var isValidIsbn = function(strIsbn, callback) {

    var sum,
        weight,
        digit,
        check,
        i,
        result;

    var str = strIsbn.replace(/[^0-9X]/gi, '');

    if (str.length != 10 && str.length != 13) {
        result = false;
    }

    if (str.length == 13) {
        sum = 0;
        for (i = 0; i < 12; i++) {
            digit = parseInt(str[i]);
            if (i % 2 == 1) {
                sum += 3*digit;
            } else {
                sum += digit;
            }
        }
        check = (10 - (sum % 10)) % 10;
        result = (check == str[str.length-1]);
    }

    if (str.length == 10) {
        weight = 10;
        sum = 0;
        for (i = 0; i < 9; i++) {
            digit = parseInt(str[i]);
            sum += weight*digit;
            weight--;
        }
        check = 11 - (sum % 11);
        if (check == 10) {
            check = 'X';
        }
        result = (check == str[str.length-1].toUpperCase());
    }

    callback(null, result);
};

module.exports = {
    isValidIsbn: isValidIsbn
};