function html(strs, ...args) {
  let res = '';
  strs.forEach((item, i) => {
    res+=item;
    if (args[i]) res+=args[i];
  })
  return res;
}

// render the result from html() into the container
function render(result, container) {
  container.innerHTML = result
}
