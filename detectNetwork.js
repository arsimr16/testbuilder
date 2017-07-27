// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if (/^3[89]\d{12}$/.test(cardNumber)) {
  	return 'Diner\'s Club';
  } else if (/^3[47]\d{13}$/.test(cardNumber)) {
  	return 'American Express';
  } else if (/^4\d{12}(?:\d{3})?(?:\d{3})?$/.test(cardNumber)) {
  	return 'Visa';
  } else if (/^5[1-5]\d{14}$/.test(cardNumber)) {
  	return ('MasterCard');
  }
};