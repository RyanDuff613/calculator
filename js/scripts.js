function add(number1, number2) {
  return number1+number2;
};

function subtract(number1, number2) {
  return number1-number2;
};

function multiply(number1, number2){
  return number1 * number2
};

function divide(number1,number2) {
  return number1 / number2
};
  
$(document).ready(function(){
  var number1 = parseInt(prompt("enter a number"));
  var number2 = parseInt(prompt('enter another number'));
  var result = multiply(number1,number2);

  alert(result);
});
  
