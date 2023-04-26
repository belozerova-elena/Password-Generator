const passwordField = document.querySelector('.js-password');
const lengthInput = document.querySelector('.js-length-input');
const lengthRange = document.querySelector('.js-length-range');
const uppercaseLetters = document.querySelector('.js-uppercase-letters');
const lowerLetters = document.querySelector('.js-lower-letters');
const numbers = document.querySelector('.js-numbers');
const symbols = document.querySelector('.js-symbols');
const btnGenerate = document.querySelector('.js-btn');

const charsUppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const charsLowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const charsNumbers = '0123456789';
const charsSymbols = '!@#$%^&*()_+';

lengthRange.addEventListener('input', function () {
  lengthInput.value = lengthRange.value;
});
lengthInput.addEventListener('input', function () {
  lengthRange.value = lengthInput.value;
});

btnGenerate.addEventListener('click', () => {
  let password = '';
  let charsLetters = '';

  if(uppercaseLetters.checked) {
    charsLetters += charsUppercaseLetters;
  }
  if(lowerLetters.checked) {
    charsLetters += charsLowerLetters;
  }
  if(numbers.checked) {
    charsLetters += charsNumbers;
  }
  if(symbols.checked) {
    charsLetters += charsSymbols;
  }
  if(charsLetters.length !== 0) {
    for (let i = 0; i < lengthInput.value; i++) {
      password += charsLetters[Math.floor(Math.random()*charsLetters.length)];
    }  
  }
  if(password.length > 20 || password.length < 5) {
    password = 'none';
  }

  passwordField.innerHTML = password;
});