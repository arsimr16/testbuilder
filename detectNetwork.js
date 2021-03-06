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

  } else if (/^5[1-5]\d{14}$/.test(cardNumber)) {
  	return ('MasterCard');

  } else if (/^6(?:011|4[4-9]\d|5\d{2})\d{12}(?:\d{3})?$/.test(cardNumber)) {
  	return 'Discover';

  } else if (/^(?:50(?:18|20|38)|6304)\d{8}\d?\d?\d?\d?\d?\d?\d?$/.test(cardNumber)) {
  	return 'Maestro';

  } else if (/^62(?:2(12[6-9]|1[3-9][\d]|[2-8]\d{2}|9(?:[0-1]\d|2[0-5]))|[4-6]\d{3}|8[2-8]\d{2})\d{10}\d?\d?\d?$/.test(cardNumber)) {
  	return 'China UnionPay';

  } else if (/^(?:49(?:03|05|11|36)\d{2}|564182|633(?:110|3\d{2})|6759\d{2})\d{10}(?:\d{2}\d?)?$/.test(cardNumber)) {
  	return 'Switch';

  } else if (/^4\d{12}(?:\d{3})?(?:\d{3})?$/.test(cardNumber)) {
  	return 'Visa';
  	
  }
};

