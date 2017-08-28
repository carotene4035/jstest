var f = require('./testFunc.js');
var chai = require('chai');
var assert = chai.assert;

describe('テストの名前', function() {
  it('250以上はA', function() {
    assert.strictEqual(
      f.get_achievement(100, 100, 100), "A"
    )
  });
  it('200以上250未満はB', function() {
    assert.strictEqual(
      f.get_achievement(100, 50, 80), "B"
    )
  });
  it('100以上200未満はC', function() {
    assert.strictEqual(
      f.get_achievement(10, 90, 10), "C"
    )
  });
  it('100未満はD', function() {
    assert.strictEqual(
      f.get_achievement(10, 10, 10), "D"
    )
  });
});
