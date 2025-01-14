/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let flag = true; // A flag to track whether the function has been called
  let result; // Variable to store the result of the first function call

  return function (...args) {
    if (flag === true) {        
      result = fn(...args); // Call the function with the provided arguments and store the result
      flag = false; // Set the flag to false, ensuring that subsequent calls do not invoke `fn`
      return result; // Return the result of the function call
    } else {
      return undefined; // On subsequent calls, return `undefined` to prevent further execution of `fn`
    }
  };
};
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
