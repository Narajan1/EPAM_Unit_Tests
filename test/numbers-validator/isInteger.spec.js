const { expect } = require('chai');
const validator = require('../../src/numbers_validator');


describe('Check isInteger function from number validators', () => {
  it('POSSITIVE - Should return true, when provided positive number', () => {
    expect(validator.isInteger(4)).to.be.equal(true);
  });

  it('POSSITIVE - Should return true, when provided 0', () => {
    expect(validator.isInteger(0)).to.be.equal(true);
  });

  it('POSSITIVE - Should return true, when provided negative number', () => {
    expect(validator.isInteger(5)).to.be.equal(true);
  });
  
  it('NEGATIVE - Should return false, when provided NaN', () => {
    expect(validator.isInteger(NaN)).to.be.equal(false);
  });

  it('NEGATIVE - Should return false, when provided float numbers', () => {
    expect(validator.isInteger(5.2)).to.be.equal(false);
  });

  it('NEGATIVE - Should throw an error, when provided string', () => {
    expect(() => {
      validator.isInteger("hello");
    }).to.throw('[hello] is not a number')
  });

  it('NEGATIVE - Should throw an error, when provided undefined', () => {
    expect(() => {
      validator.isInteger(undefined);
    }).to.throw('[undefined] is not a number')
  });

  it('NEGATIVE - Should throw an error, when provided null', () => {
    expect(() => {
      validator.isInteger(null);
    }).to.throw('[null] is not a number')
  });

});