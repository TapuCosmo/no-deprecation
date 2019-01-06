const process = require("process");

module.exports = function (func, that) {
  const wrappedFunc = function () {
    const origDeprecation = process.noDeprecation;
    process.noDeprecation = true;
    const ret = func.apply(that, arguments);
    process.noDeprecation = origDeprecation;
    return ret;
  };
  // Preserve arity
  Object.defineProperty(wrappedFunc, "length", {
    value: func.length
  });
  // Preserve name
  Object.defineProperty(wrappedFunc, "name", {
    value: func.name
  });
  return wrappedFunc;
};
