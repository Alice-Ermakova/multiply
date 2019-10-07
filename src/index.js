module.exports = function multiply(first, second) {

 
  //create new variables
  let multiply = 0;
  let result = 0;

  //use the global function BigInt to convert strings(first, second) into a number
  let NumFirst = BigInt(first);
  let NumSecond = BigInt(second);

  //checking the numbers obtained
  //console.log(NumFirst);
  //console.log(NumSecond);

  //multiply two numbers 
  multiply= NumFirst * NumSecond;

  //checking the result of multiplying numbers
  //console.log(multiply);

  //checking typeof multiply
  //console.log(typeof(multiply));

  //BigInt to convert into a string
  result = multiply.toString();

  //checking the result
  //console.log(result);

  return result;
}