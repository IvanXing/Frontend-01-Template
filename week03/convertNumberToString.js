function convertNumberToString(number, type) {
    if (arguments.length < 2) {
        type = 10;
    }
    var integer = Math.floor(number);
    var fractionPos = ('' + number).indexOf('.');
    var fractionLength = ('' + number).length - fractionPos - 1;
    var fraction = (number - integer).toFixed(fractionLength);
    var str = '';
    while (integer > 0) {
        str = integer % type + str;
        integer = Math.floor(integer / type);
    }
    if (fractionPos > -1) {
        str += '.';
        while (fractionLength > 0) {
            fraction *= type;
            str += Math.floor(fraction % type);
            fractionLength--;
        }
    }
    return str;
}














function convertNumberToString(number, radix) {
    let integer = Math.floor(number);
    let fraction = String(number).match(/\.\d+$/);
    if (fraction) {
      fraction = fraction[0].replace('.', '');
    }
    let string = '';
    while (integer > 0) {
      string = String(integer % radix) + string;
      integer = Math.floor(integer / radix);
    }
    return fraction ? `${string}.${fraction}` : string;
  }