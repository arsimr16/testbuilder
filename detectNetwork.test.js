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
  prefixes = getAllNumsInRange(prefixes);
  lengths = getAllNumsInRange(lengths);
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
    getAllCombos('Diner\'s Club', ['38-39'], ['14']);
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
    getAllCombos('MasterCard', ['51-55'], ['16']);
  });
});

describe('Discover', function() {
  it('has a prefix of 6011, 644-649, or 65 and a length of 16 or 19', function() {
    getAllCombos('Discover', ['6011', '644-649', '65'], ['16', '19']);
  });
});

describe('Maestro', function() {
  it('has a prefix of 5018, 5020, 5038, or 6304 and a length of 12-19', function() {
    getAllCombos('Maestro', ['5018', '5020', '5038', '6304'], ['12-19']);
  });
});

describe('China UnionPay', function() {
  it('has a prefix of 624-626, or 6282-6288 and a length of 16-19', function() {
    getAllCombos('China UnionPay', ['624-626', '6282-6288'], ['16-19']);
  });

  it('has a prefix of 622126-622226 and a length of 16-19', function() {
    getAllCombos('China UnionPay', ['622126-622226'], ['16-19']);
  });

  it('has a prefix of 622227-622327 and a length of 16-19', function() {
    getAllCombos('China UnionPay', ['622227-622327'], ['16-19']);
  });

  it('has a prefix of 622328-622428 and a length of 16-19', function() {
    getAllCombos('China UnionPay', ['622328-622428'], ['16-19']);
  });

  it('has a prefix of 622429-622529 and a length of 16-19', function() {
    getAllCombos('China UnionPay', ['622429-622529'], ['16-19']);
  });

  it('has a prefix of 622530-622630 and a length of 16-19', function() {
    getAllCombos('China UnionPay', ['622530-622630'], ['16-19']);
  });

  it('has a prefix of 622631-622731 and a length of 16-19', function() {
    getAllCombos('China UnionPay', ['622631-622731'], ['16-19']);
  });

  it('has a prefix of 622732-622832 and a length of 16-19', function() {
    getAllCombos('China UnionPay', ['622732-622832'], ['16-19']);
  });

  it('has a prefix of 622833-622925 and a length of 16-19', function() {
    getAllCombos('China UnionPay', ['622833-622925'], ['16-19']);
  });
});


describe('Switch', function() {
  it('has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19', function() {
    getAllCombos('Switch', ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'], ['16', '18-19']);
  });
});
