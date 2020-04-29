function convertStringToNumber(string, x){
  if(string.indexOf("e") < 0){
      if(arguments.length < 2){
          x = 10;
      }
      var chars = string.split('');
      var number = 0;
      var i = 0;
      while(i < chars.length && chars[i] !== '.'){
          number = number * x;
          number += chars[i].codePointAt(0) - '0'.codePointAt(0); //单个字符转成数字
          i++;
      }
      if(chars[i] === '.'){
          i++;
      }
      var fraction = 1;
      while(i < chars.length){
          fraction = fraction / x;
          number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction; 
          i++;
      }
  }else{
      var eChars = string.split('e');
          var left = Number(eChars[0]);
          var right = Number(eChars[1]);
          number = left * Math.pow(10, right);
  }
  return number;
}