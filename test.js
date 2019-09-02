'use strict'

const assert = require('assert')
const charUnescape = require('.')

describe('charUnescape()', function () {
  it('should remove escape character', function () {
    assert.strictEqual(charUnescape()("This is \\a \\'test\\'"), "This is a 'test'")
  })

  it('should unescape a double escape character only once', function () {
    assert.strictEqual(charUnescape()("This is \\\\a \\'test\\\\'"), "This is \\a 'test\\'")
  })

  it('should support a custom escape character', function () {
    assert.strictEqual(charUnescape('@')("This is @@a @'test@'"), "This is @a 'test'")
  })

  it('should support a custom escape string', function () {
    assert.strictEqual(charUnescape('@@')("This is @@@a @@'test@@'"), "This is @a 'test'")
    assert.strictEqual(charUnescape('@@')("This is @@@@a @@'test@@'"), "This is @@a 'test'")
    assert.strictEqual(charUnescape('XYZ')("This is XYZXYZa XYZ'testXYZ'"), "This is XYZa 'test'")
  })
})
