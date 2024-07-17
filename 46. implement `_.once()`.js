// we need to create a closure over the original function
function once(func) {
  // used as a called flag
  let hasBeenCalled = false;
  // represent the result of original function call
  let res;
  // returns a new function that takes rest parameters called args
  return function (...args) {
    // when the new function is called for the first time, it checks if the flag is false. if this is the case, it sets the flag to true, calls func using func.call with the provided arguments and caches the result in res
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      res = func.call(this, ...args);
    } 
    // and returns the result;
    // for subsequent calls, the new function will find that the flag is true, meaning that it simplely returns the stored result.
    return res;
  }
}
