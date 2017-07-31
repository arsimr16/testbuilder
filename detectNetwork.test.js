function getAllNumsInRange(nums) {
  var result = [];
  nums.forEach(function(num) {
    if (num.includes('-')) {
      num = num.split('-');
      var start = Number(num[0]);
      var end = Number(num[1]);
      for (var i = start; i <= end; i++) {
        result.push(i.toString());
      }
    } else {
      result.push(num);
    }
  });
  return result;
}

function getAllCombos(network, prefixes, lengths) {
  var assert = chai.assert;
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
  allCombos.forEach(function(combo) {
    assert(detectNetwork(combo) === network);
  });
}

describe('Diner\'s Club', function() {
  it('has a prefix of 38 or 39 and a length of 14', function() {
    getAllCombos('Diner\'s Club', ['38', '39'], ['14']);
  });
});

describe('American Express', function() {
  it('has a prefix of 34 or 37 and a length of 14', function() {
    getAllCombos('American Express', ['34', '37'], ['15']);
  });
});

describe('Visa', function() {
  it('as a prefix of 4 and a length of 13, 16, or 19', function() {
    getAllCombos('Visa', ['4'], ['13', '16', '19']);
  });
});

describe('MasterCard', function() {
  it('has a prefix of 51-55 and a length of 16', function() {
    getAllCombos('MasterCard', ['51', '52', '53', '54', '55'], ['16'])
  });
});

describe('Discover', function() {
  it('has a prefix of 6011, 644-649, or 65 and a length of 16 or 19', function() {
    getAllCombos('Discover', ['6011', '644', '645', '646', '647', '648', '649', '65'], ['16', '19']);
  });
});

describe('Maestro', function() {
  it('has a prefix of 5018, 5020, 5038, or 6304 and a length of 12-19', function() {
    getAllCombos('Maestro', ['5018', '5020', '5038', '6304'], ['12', '13', '14', '15', '16', '17', '18', '19'])
  });
});

describe('should support China UnionPay')
describe('should support Switch')
