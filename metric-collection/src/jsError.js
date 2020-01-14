window.addEventListener('error', (e) =>{
  console.log(e)
})

document.addEventListener('error', e => {
  console.log('资源错误', e);
}, true)

window.addEventListener('unhandledrejection', (err) => {
  console.log(err);
})

// 后端 node
global.addEventListener('uncatcherror')
global.addEventListener('unhandledrejection')