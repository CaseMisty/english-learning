/*
The promisify() function takes a function (fn) that has an error-first 
callback as its last argument. It returns a new function that returns a promise. 
When the new function is called, it calls the original function (fn) with the same arguments, 
and passes a callback function that resolves or rejects the promise based on the error or data 
received from the original function.

The returned promise can then be used to handle the data or error 
in a more streamlined way, without having to deal with the error-first callback.

*/

/*
the original funcion takes indefinite number of params,  the arg1 arg2 here are like tentatives, the last param is 
a error-first callback that handles the success and error logic.

what we need to do here is implement a function called promisify, it taks in the original function, 
Returns a new function that returns a promise. It accepts the same arguments as `func`, 
except the last error-first result handleing callback argument
*/
function promisify(func) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (error, data) => {
        if (error) reject(error);
        resolve(data)
      })
    })
  }
}
