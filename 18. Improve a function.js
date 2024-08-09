function excludeItems(items, excludes) {
  const map = new Map(); // use a map to cache the exclusion criteria
  for (let {k, v} of excludes) {  // iterate over the excludes, destructure each item into k and v
    if (!map.has(k)) {
      map.set(k, new Set()); // if the key is not exist in the map, add a new entry to map and initialize the value with a new Set()
    }
    const matchedSet = map.get(k); // retrieve the set with specified key k, and assign it to a variable called matchedSet
    matchedSet.add(v); // after that, add the value v to the corresponding set
  }

  return items.filter(item => { // utilize the filter method to filter out items based on the map we just created
    // Iterate each key in item and verify if it exist in the map and matches the corresponding exclusion value, assigning the result to a boolean variable here called keyValueMatched
    // map.get might return undefined, so add a question mark here
    // here we can simplify the arrow function to one line, but for readability, let's just leave the code as it is
    const keyValueMatched = Object.keys(item).some(key => {
        return map.get(key)?.has(item[key]);
    })
    // to avoid repeating the same mistake, the returned value should be negated /nɪˈɡeɪtɪd/.
    return !keyValueMatched;
  })
}
