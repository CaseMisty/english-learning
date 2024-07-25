function getTags(tree) {
  const list = [tree];
  const res = new Set();
  while (list.length) {
    const curr = list.shift();
    res.add(curr.tagName.toLowerCase());
    list.push(...curr.children);
  }
  return Array.from(res);
}
