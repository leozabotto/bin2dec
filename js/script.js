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
  const decimal = binToDec(binary)
  return decimal;
}

function privateScope() {

  function addDigit(e) {
    const binInput = document.querySelector('#binary');
    const result = document.querySelector('#response')
    if(binInput.value.length < 8) {
      binInput.value += e.srcElement.innerText;
      result.innerHTML = conversor(Number(binInput.value));
    }
    else {
      M.toast({html: 'Limit of 8 digits reached!'});
    } 
  }

  function removeDigit(e) {
    const binInput = document.querySelector('#binary');
    const result = document.querySelector('#response')
    if(!(binInput.value.length)) {
      M.toast({html: 'No digit to remove!'});
      result.innerHTML = '';
    }
    else {
      binInput.value = binInput.value.slice(0, -1);
      result.innerHTML = conversor(Number(binInput.value));
    } 
  }


  const btn0 = document.querySelector('#btn0');
  const btn1 = document.querySelector('#btn1');
  const delBtn = document.querySelector('#removeDgt');

  btn0.addEventListener('click', addDigit);
  btn1.addEventListener('click', addDigit);
  delBtn.addEventListener('click', removeDigit);
 
}

privateScope();


