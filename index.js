'use strict'

const regexEscape = require('escape-string-regexp')
const toStr = require('2/string')

module.exports = function charUnescape (escapeChar = '\\') {
  if (typeof escapeChar !== 'string') throw new TypeError('Escape character must be a one-char string')
  const regex = new RegExp(regexEscape(escapeChar) + '(.)', 'g')
  const unesc = (match, char) => char
  return str => toStr(str, {elseThrow: 'Cannot unescape characters in a non-string'}).replace(regex, unesc)
}
