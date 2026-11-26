// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply all 3 numbers together. Note: The argument passed must NOT be the same number.

function multiply(number1, number2, number3) {
  if (number1 == number2) {
    return "Error: Arguments must not be the same number.";
  } else if (number1 == number3) {
    return "Error: Arguments must not be the same number.";
  } else if (number2 == number3) {
    return "Error: Arguments must not be the same number.";
  } else return number1 * number2 * number3;
}
console.log(multiply(2, 3, 4));

// TODO: Create a function expression called ‘convertToSeconds’ that takes in a number of minutes as an argument and returns the amount in seconds. ***Do not use a console.log() inside of the function***

function convertToSeconds(minutes) {
  return minutes * 60; //convert mins to secs
}
console.log(convertToSeconds(5));

// TODO: Create a function called fahrenheitToCelsius that takes the temperature as an parameter and returns the equivalent temperature in Celsius. ***Do not use a console.log() inside of the function***

function fahrenheitToCelsius(farenheit) {
  return ((farenheit - 32) * 5) / 9; //calculation for faraheit to celcius
}
console.log(fahrenheitToCelsius(32));

// TODO: Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function ***

function reverseString(string) {
  return string.split("").reverse().join(""); //split the words into an array then .reverse to reverse it and .join to join it into a string again
}
console.log(reverseString("Qaaid is so cool"));

// TODO: Create a function that takes in a string and returns the number of Vowels in the sentence. E.g. countVowels(‘Javascript’) //output =3 console.log() inside of the function***
function countVowels(string) {
  let count = string.match(/[aeiouAEIOU]/g); //g makes it global adding i makes in not cas sensitibe
  return count ? count.length : 0;
}
console.log(countVowels("joshua"));

// TODO: Create a “isPrime” function that takes a number as a parameter and returns true if the number is prime, and false otherwise. Make sure to test your code with 4 numbers

function isPrime(number) {
  if (number <= 1) return false;

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
console.log(isPrime(34));
console.log(isPrime(23));
console.log(isPrime(1));
console.log(isPrime(3));
