// for finding the largest difference
function largestDiff(arr) {
  // handle the edge case.
  if (!arr.length) return 0;
  // initial`ize` the lowest and hightest value with the first item of array
  let low = high = arr[0];
  // we have to iterate through this array, and continuously update the lowest and highest value during the process
  for (let i = 1 ; i < arr.length; i++) {
    const cur = arr[i];
    if (cur < low) low = cur;
    if (cur > high) high = cur;
  }
  // once the loop is over, calculate the difference between them
  return Math.abs(low - high);
}
