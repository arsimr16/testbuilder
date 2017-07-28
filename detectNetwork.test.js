function getAllCombos(prefixes, lengths) {
  var allCombos = [];
  prefixes.forEach(function(prefix) {
    lengths.forEach(function(length) {
      var newCombo = prefix;
      while (newCombo.length < length) {
        newCombo += '1';
      }
      allCombos.push(newCombo);
    });
  });
  return allCombos;
}

describe('Diner\'s Club', function() {
  var assert = chai.assert;
  
  it('has a prefix of 38 or 39 and a length of 14', function() {
    var allCombos = getAllCombos(['38', '39'], ['14']);
    allCombos.forEach(function(combo) {
      assert(detectNetwork(combo) === 'Diner\'s Club');
    });
  });
  
});

describe('American Express', function() {
  var assert = chai.assert;

  it('has a prefix of 34 or 37 and a length of 15', function() {
    var allCombos = getAllCombos(['34', '37'], ['15']);
    allCombos.forEach(function(combo) {
      assert(detectNetwork(combo) === 'American Express');
    });
  });
});

describe('Visa', function() {
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13, 16, or 19', function() {
    var allCombos = getAllCombos(['4'], ['13', '16', '19']);
    allCombos.forEach(function(combo) {
      assert(detectNetwork(combo) === 'Visa');
    });
  });
});

describe('MasterCard', function() {
  var assert = chai.assert;

  it('has a prefix of 51-55 and a length of 16', function() {
    var allCombos = getAllCombos(['51', '52', '53', '54', '55'], ['16']);
    allCombos.forEach(function(combo) {
      assert(detectNetwork(combo) === 'MasterCard');
    });
  });
});

describe('Discover', function() {
  var assert = chai.assert;

  it('has a prefix of 6011, 644-649, or 65 and a length of 16 or 19', function() {
    var allCombos = getAllCombos(['6011', '644', '645', '646', '647', '648', '649', '65'], ['16', '19']);
    allCombos.forEach(function(combo) {
      assert(detectNetwork(combo) === 'Discover');
    });
  });
});

describe('Maestro', function() {
  var assert = chai.assert;

  it('has a prefix of 5018, 5020, 5038, or 6304 and a length of 12-19', function() {
    var allCombos = getAllCombos(['5018', '5020', '5038', '6304'], ['12', '13', '14', '15', '16', '17', '18', '19']);
    allCombos.forEach(function(combo) {
      assert(detectNetwork(combo) === 'Maestro');
    });
  });
});

describe('should support China UnionPay')
describe('should support Switch')
