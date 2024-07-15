// This function is quite simple. It defines a utility to return the type of data as a string
function detectType(data) {
  // Get the precise name of reference types. It returns a string like this: [object TypeName]
  const str = Object.prototype.toString.call(data);
  // Use a regular expression to extract just the type name from the string,
  // remember to convert to lowercase
  const match = str.match(/\[object (\S+)\]/i)
  const res = match[1].toLowerCase();

  return res;
}
