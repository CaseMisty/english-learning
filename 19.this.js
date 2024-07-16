const obj = {
  a: 1,
  b: function() {
    console.log(this.a)
  },
  c() {
    console.log(this.a)
  },
  d: () => {
    console.log(this.a)
  },
  e: (function() {
    return () => {
      console.log(this.a);
    }
  })(),
  f: function() {
    return () => {
      console.log(this.a);
    }
  }
}

// the a property of obj is directly reference by the dot .
console.log(obj.a) 
// is a normal function and invoking it will log 1
obj.b() //1
// equivalent to the previous one
;(obj.b)() //1
const b = obj.b
// assigning the value of obj.b to a variable and invoking it without the dot operator will automatically apply the default this binding strategy. as a result, this will bind to window object, therefore it will log undefined
b()//undefined
// using apply to explicitly bind this to {a: 2} it logs 2
obj.b.apply({a: 2}) //2
// also a normal function.
obj.c() //1
// obj.d is an arrow function, hence it will retrieve the this from the parent scope at the time they are defined which is window
obj.d() // undefined
// skip
;(obj.d)() // undefined
// the this property of an arrow function cannot be changed. apply will not make any difference for arrow functions and it keeps the original this binding 
obj.d.apply({a:2}) // undefined
// obj.e is an IIFE so this refers to window. it returns an arrow function hence this will take its value from enclosing context i.e. window. it logs undefined.
obj.e()
// same as above
;(obj.e)()
// call will make any difference for arrow functions
obj.e.call({a:2})
// obj.f is a normal funcion call so this points to obj inside it. the arrow function inside takes this from enclosing context hence referring to obj.
obj.f()()
// same
;(obj.f())()
// same
obj.f().call({a:2})
