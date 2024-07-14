/*
Today, we're going to go over two problems,  decode message and implement a general momoization function. 
Let's start with the easy one.  implement a memo.
Basically, this problem is kinda easy. we can use a map to cache the results. 
The biggest challenge lies in how to reasonably calculate a key, but this is not an issue in this case, 
as this problem provides a resolver function for calculate the key is passed in as a parameter.
*/
function memo(func, resolver) {
  // at the beginning, create a map to cache the results of function calls. This will be a closure value.
  const map = new Map();
  // return the wraped function
  return function (...args) {
    // calculate the key by resolver, if resolver is not provided, use the default joining the arguments with an underscore 
    // cache key which statement by the question
    const key = resolver ? resolver(...args) : args.join('_');
    // check if the key already exists in the cache. If it does, directly return the memorized result.
    if (map.has(key)) {
      return map.get(key)
    } else {
      // if not, call the function and set the key value pair to the cache map, then return the result of the funcion call
      const res = func.call(this, ...args);
      map.set(key, res);
      return res;
    }
  }
}
// the code is done. Let me check it and then submit it.
