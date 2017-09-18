var f = require('./testFunc.js');
var chai = require('chai');
var assert = chai.assert;

describe('テストの名前', function() {

  // Aかつ合格
  it('Aかつ合格', function() {
    assert.strictEqual(
      f.judgement(100, 100, 100), "あなたの成績はAです。合格です!"
    )
  });


  // Aかつ不合格
  it('Aかつ不合格', function() {
    assert.strictEqual(
      f.judgement(100, 100, 55), "あなたの成績はAです。不合格です!"
    )
  });

  // Bかつ合格
  it('Bかつ合格', function() {
    assert.strictEqual(
      f.judgement(70, 70, 70), "あなたの成績はBです。合格です!"
    )
  });
  // Bかつ不合格
  it('Bかつ不合格', function() {
    assert.strictEqual(
      f.judgement(100, 100, 45), "あなたの成績はBです。不合格です!"
    )
  });

  // Cかつ合格
  it('Cかつ合格', function() {
    assert.strictEqual(
      f.judgement(65, 65, 65), "あなたの成績はCです。合格です!"
    )
  });
  // Cかつ不合格
  it('Cかつ不合格', function() {
    assert.strictEqual(
      f.judgement(100, 80, 15), "あなたの成績はCです。不合格です!"
    )
  });

  // Dかつ不合格
  it('Dかつ不合格', function() {
    assert.strictEqual(
      f.judgement(30, 30, 30), "あなたの成績はDです。不合格です!"
    )
  });
});
