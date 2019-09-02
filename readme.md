# char-unescape

Removes a given escape sequence from before characters in a string. Correctly handles double-escapes by only unescaping them once.

## Installation

Requires [Node.js](https://nodejs.org/) 8 or above.

```bash
npm i char-unescape
```

## API

The module exports a single function.

### Parameter

Optional: `escapeChar` (string): The escape sequence to remove. Defaults to `\`.

### Return Value

Returns a function which accepts a single parameter: a string to which the unescape operation should be applied.

## Example

```javascript
// Note the function call!
// No arguments are passed here because we're using
// the default backslash escape character.
const charUnescape = require('char-unescape')()

charUnescape("This is \\\\a \\'test\\'") // "This is \\a 'test'"
```

```javascript
const charUnescape = require('char-unescape')('@')

charUnescape("This is @@a @'test@'") // "This is @a 'test'"
```

## Related

* [char-escape](https://github.com/lamansky/char-escape)
