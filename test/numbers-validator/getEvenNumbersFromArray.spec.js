
const { expect } = require('chai');
const validator = require('../../src/numbers_validator');


describe('Check getEvenNumbersFromArray function from number validators', () => {
  it('POSSITIVE - Should return array, when provided array with numbers', () => {
    expect(validator.getEvenNumbersFromArray([5,6,8,9])).to.be.eql([6,8]);

  });

  it('POSSITIVE - Should return empty array, when provided array with odd numbers', () => {
    expect(validator.getEvenNumbersFromArray([5,7,11,9])).to.be.eql([]);
  });

  it('POSSITIVE - Should return array, when provided array with positive and negative numbers', () => {
    expect(validator.getEvenNumbersFromArray([5,7,-8,11,9,-19,20])).to.be.eql([-8,20]);
  });

  it('NEGATIVE - Should throw an error, when provided array has a none number member ', () => {
    expect(() => {
      validator.getEvenNumbersFromArray([5, 6, 'a', 8]);
    }).to.throw('[5,6,a,8] is not an array of "Numbers"');
  });

  it('NEGATIVE - Should throw an error, when provided single number', () => {
    expect(() => {
      validator.getEvenNumbersFromArray(10);
    }).to.throw('[10] is not an array of "Numbers"');
  });

  it('NEGATIVE - Should throw an error, when provided string', () => {
    expect(() => {
      validator.getEvenNumbersFromArray("hello");
    }).to.throw('[hello] is not an array of "Numbers"');
  });

  it('NEGATIVE - Should throw an error, when did not provided argument', () => {
    expect(() => {
      validator.getEvenNumbersFromArray();
    }).to.throw('[undefined] is not an array of "Numbers"');
  });
});
