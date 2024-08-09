/* 
Basicly we can solve this question by employ a BFS, 
it ensures that each node's children are processed in the correct order.
*/
// let get down to implementation 
function flatten(root) {
  // Firstly we check the edge case here, if the root node not exists, return as an empty array.
  if (!root) return [];
  // initialize a queue with the root node. 
  const queue = [root];
  // initialize an array to store the flattern result nodes
  const res = [];
  // iterate while there are still nodes in queue
  while (queue.length > 0) {
    // remove the first node from queue and push it into res array
    const node = queue.shift();
    res.push(node);
    // add all children of current node to the end of the queue
    queue.push(...Array.from(node.children));
  }
  // this while loop continues untill all children nodes is pushed into result array
  // return the flattened array of nodes
  return res;
}
