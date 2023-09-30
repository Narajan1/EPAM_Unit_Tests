const { expect } = require('chai');
const validator = require('../../src/numbers_validator');

describe('Check isNumberEvan validator functions', () => {
  
  /*beforeEach(() => {
        console.log("Hello, I'm beforeEach");
  }) */

  it('POSSITIVE - Should return true, when provided evan number', () => {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });

  it('POSSITIVE - Should return true, when provided 0', () => {
    expect(validator.isNumberEven(0)).to.be.equal(true);
  });
  
  it('POSSITIVE - Should return true, when provided negative evan number', () => {
    expect(validator.isNumberEven(-8)).to.be.equal(true);
  });

  it('NEGATIVE - Should return false, when provided odd number', () => {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });

  it('NEGATIVE - Should throw an error, when provided string', () => {
    expect(() => {
      validator.isNumberEven("hello");
    }).to.throw('[hello] is not of type "Number" it is of type "string"')
  });
});
