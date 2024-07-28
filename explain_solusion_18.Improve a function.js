// https://bigfrontend.dev/problem/improve-a-function

/*
1. The function excludeItems is designed to filter out items based on a set of exclusion criteria, which are provided as an array of key-value pairs.
The excludeItems method takes two parameters.
The first one is an array of objects, where each object has an indefinite number of keys.
// "a object with an assortment of keys"
The second param called excludes, which is an array contains exclusion criterion, each with a key called k and a va3lue called v. it is used to filters the items array to include only those items where the value of property name specified by k does not equal to v.

2. No, it's not working properly due to the erroneous /ɪˈroʊniəs/ filter condition.
The function retains the items match the exclusion criteria instead of removing them, resulting in the opposite outcome.

To be more critical, It's better to return a new array and avoid mutate the parameter's value.
Directly modifying the value of a reference type parameter within a function is not a good practice. Most company Eslint configuration prohibit this.

3. Let n be the number of items in the items array, and let m be the number of exclusion criteria in the excludes array.
Since there are two loops, the overall time complexity is O(n * m).

4. We could improve the search performance by caching the exclusion criteria using a Map, where each 'k' is a key in the map, and each 'v' is stored in a Set associate with that key.
*/

// Let's get down to the implementation
function excludeItems(items, excludes) {
  const map = new Map(); // use a map to cache the exclusion criteria
  for (let {k, v} of excludes) {  // iterate over the excludes, destructure each item into k and v
    if (!map.has(k)) {
      map.set(k, new Set()); // if the key is not exist in the map, add a new entry to map and initialize the value with a new Set()
    }
    const matchedSet = map.get(k); // retrieve the set with specified key k, and assign it to a variable called matchedSet
    matchedSet.add(v); // after that, add the value v to the corresponding set
  }

  // utilize the filter method to filter out items based on the map we just created
  // Iterate each key in item and verify if it exist in the map and matches the corresponding exclusion value, assigning the result to a boolean variable here called keyValueMatched
  return items.filter(item => { 
    const keyValueMatched = Object.keys(item).some(key => {
      // map.get might return undefined, so add a question mark here
      // here we can simplify the arrow function to one line, but for readability, let's just leave the code as it is
      return map.get(key)?.has(item[key]);
  })
    // to avoid repeating the same mistake, the returned value should be negated /nɪˈɡeɪtɪd/.
    return !keyValueMatched;
  })
}
// let's check if it passes /'pa:siz/, okay, it works. That's my presentation for today. Thank you for listening. bye
