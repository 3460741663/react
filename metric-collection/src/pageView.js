// hashRoute
function pageCount() {
  console.log(window.location.href, ' + 1');

}
window.addEventListener('hashchange', pageCount)

// h5 history
window.addEventListener('popstate', pageCount)
// go/back/forward可以监测
// pushstate replaceState 监测不到引起的url的变化

let hooks = ['pushState', 'replaceState']
hooks.forEach(hook => {
  let method = window.history[hook];
  window.history[hook] = function(...args) {
    setTimeout(pageCount, 0);
    return method.apply(window.history, args)
  }
})

