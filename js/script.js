function conversor(binary) {
  function digitToDecimal(position) {
    return Math.pow(2,position)
  }
  function binToStr(bin) {
    return bin.toString();
  }
  function reverseStr(str) {
    let reversedStr = ""; 
    for(let i = (str.length - 1); i>= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  function binToDec(bin) {
    const strBin = binToStr(bin);
    const reversedStrBin = reverseStr(strBin)
    let decimal = 0;
    for(let i = (reversedStrBin.length - 1); i >= 0; i--) {
      if (reversedStrBin[i] === "1") {
        decimal += digitToDecimal(i);
      } 
    }
    return decimal;
  }  
}
