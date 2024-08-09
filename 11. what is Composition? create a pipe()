/* 
pipe takes an array of functions fns as its argument, and returns a new function that
applies each function in fns to the output of the previous function.
The new function takes one argument x, which is passed as the input to the first function in fns.
reduce is used to invoke each function in fns in turn.

The accumulator acc starts out as value, and is replaced by the return value of each function as it is invoked.

Finally, the output of the last function is returned as the output of the new function.
*/
function pipe(funcs) {
	return function (value) {
		return funcs.reduce((res, func) => {
			return func(res);
		}, value)
	}
}

const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y
console.log(pipe([
  times(2),
  times(3)
]))
