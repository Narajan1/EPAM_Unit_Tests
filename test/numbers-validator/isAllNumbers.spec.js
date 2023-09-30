const { expect } = require('chai');
const validator = require('../../src/numbers_validator');


describe('Check isAllNumbers function from number validators', () => {
  it('POSSITIVE - Should return true, when provided array with numbers (negative, positive, 0)', () => {
    expect(validator.isAllNumbers([5, 6, 8, 9, -20, 0])).to.be.equal(true);
  });

  it('POSSITIVE - Should return true, when provided array with float numbers', () => {
    expect(validator.isAllNumbers([5.8, 6, 8, 9, -20.9])).to.be.equal(true);
  });

  it('NEGATIVE - Should return false, when provided array with not number members', () => {
    expect(validator.isAllNumbers(['abc', true, NaN, null, 5])).to.be.equal(false);
  });

  it('NEGATIVE - Should throw an error, when provided string', () => {
    expect(() => {
      validator.isAllNumbers("hello!");
    }).to.throw('[hello!] is not an array');
  });

  it('NEGATIVE - Should throw an error, when provided undefined', () => {
    expect(() => {
      validator.isAllNumbers(undefined);
    }).to.throw('[undefined] is not an array');
  });
});