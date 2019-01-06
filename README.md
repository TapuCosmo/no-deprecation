# No Deprecation

Wraps functions to remove deprecation warnings.

## Normal Wrapping

```js
const noDeprecation = require("no-deprecation");
const util = require("util");

const deprecatedFunction = util.deprecate(function () {
  return "Hello World!";
});

const undeprecatedFunction = noDeprecation(deprecatedFunction);

console.log(undeprecatedFunction());
// -> "Hello World!", with no deprecation warning
```

## Wrapping With `this`

```js
const noDeprecation = require("no-deprecation");
const util = require("util");

Array.prototype.replaceFirst = util.deprecate(function (data) {
  this[0] = data;
});

const array = [1, 2, 3];
const undeprecatedFunction = noDeprecation(Array.prototype.replaceFirst, array);

undeprecatedFunction(1337); // No deprecation warning

console.log(array);
// -> [1337, 2, 3]
```
