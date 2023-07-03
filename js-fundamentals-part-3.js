function add7(number) {
  return number + 7;
}
console.log(add7(5));

function multiply(number1, number2 ) {
  return number1 * number2;
}
console.log(multiply(5,7));

function capitalize(string) {
  const stringCapitalized = string.charAt(0).toUpperCase() + string.slice(1);
  return stringCapitalized;
}
console.log(capitalize("teststring"));


function lastLetter(string){
  const lastLetter = string.slice(-1);
  return lastLetter;
}
console.log(lastLetter("abcd"))
