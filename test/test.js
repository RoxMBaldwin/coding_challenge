const assert = require('chai').assert;
const numberToWords = require('../app.js');

describe('numberToWords', () => {

  it('takes a number up to one billion', () => {
    assert.equal(numberToWords(1000000001), 'please enter a less than 1000000000')
  })

  it('takes a number up to the hundreth decimal', () => {
    assert.equal(numberToWords(99.013), 'please enter a remainer to the hundreth position')
  })

  it('correctly translates the number value to words', () => {
    assert.equal(numberToWords(55576683), 'fifty five million five hundred and seventy six thousand six hundred and eighty three dollars')
    assert.equal(numberToWords(9999182.73), 'nine million nine hundred and ninety nine thousand one hundred and eighty two and 73/100 dollars')
  })

  // it('returns desired result', () => {
  //   assert.deepEqual(application(arguments), 'desired result')
  // })

});
