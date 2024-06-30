/* Transcript of the coding question 118. Virtual DOM II - createElement https://bigfrontend.dev/problem/virtual-dom-II-createElement */

// I'm sharing my screen now. Is it visible to everyone?  or Can everyone see it?
// Regarding this problem, we basically need to complete two functions.
// First, the `createElement`, which generates our custom `node` element.
// Then, the `render`, which takes our custom `node` and returns a `DOM` node. okay, lets do it.
// Create a function that constructs a custom Node called MyElement, which is a simplified version of a React element node.
const createElement = (type, props, ...children) => {
  return {
    type,
    // Not doing too much in this function, just accepting type, props, children, and other props, and returning them as an object.
    props: {
      // It is worth noting that, by react convention, the 'children' property is located within the 'props' object.
      children,
      ...props,
    },
  };
};

// Following that, rename createElement as h.
const h = createElement;
//  For the convenience of execute it to see if the generated virtual DOM matches the expected result. Okay, the result is as intended
const node = h(
  "div",
  {},
  h("h1", {}, "This is "),
  h(
    "p",
    { className: "paragraph" },
    "a ",
    h("button", {}, "button "),
    "from ",
    h("a", { href: "https://bfe.dev" }, h("b", {}, "BFE"), ".dev")
  )
);

/**
 * @param { MyElement } myElement - The element to render.
 * @returns { HTMLElement }
 */

// Now it's time to implement the second function, render, which takes in a MyElement and returns the corresponding DOM element.
const render = (myElement) => {
  //When the parameter of render is a string type, we just return it directly.
  if (typeof myElement === "string") {
    return myElement;
  }

  // Deconstruct myElement and assign it to type and props. Extract the props and children as variables.
  const {  type, props: { children, ...props }  } = myElement;
  // The type here represents the HTML tag name, so let's create it using the document.createElement method.
  const element = document.createElement(type);
  // and this will be a recursive  method, to prevent omissions /əˈmɪʃ(ə)n/, return the element here, this serves as the base case for terminating the recursion.

  // In addition, we have to iterate through the props object with Object.entries and set each property to the element.
  for (const [name, value] of Object.entries(props)) {
    // In this for loop we set all attributes in this element. 
    // and we need to handle the className attribute independently because it's not called that in DOM elements.
    // . so use a ternary/ˈtɜːnərɪ/ operator here. if equal to classname, set the attribute name as class, if not directly use this name
    element.setAttribute(name === "className" ? "class" : name, value);
  }
  // All asttributes of element have been set. As we proceed, we should handle children elements.
  // Here's the trick: the DOM.append method appends the passed element to the end of the element.
  // It accepts an indefinite number of arguments, which can be DOM nodes or strings. When a string is passed,
  // the append method will automatically wrap it in a TextNode, without requiring us to handle it manually.
  // Use the map function to recursively call the render method and then destructure the return value.
  // There's a catch : children can be not only elements but also strings. The current render method here is not sufficient to handle strings.
  // So, we can tweak our render function to adapt to this. we will add this at the beginning of the function.
  element.append(...children.map(render));

  // By the time we reach this line, all the child elements have been appended to the element, and we simply return the element here.
  return element;
};

// Finally, add some test code to check the call results and see if they aligns with the expected outcome. Okay, No issues detected. Everything works perfectly.

const el = render(node);
console.log(el);
// That's it all from me, thanks for watching.  Over to you, Michael.
// that's it from my side.

// Oh no, it can't run anymore. Let's take a look at why. Let's add a breakpoint here to see why children is undefined.
// Damn, I missed an 's' in the property name during destructuring. Such a rookie/silly/basic mistake.
// a very rookie mistake
