const _XMLHttpRequest = window.XMLHttpRequest;
// window.XMLHttpRequest.prototype.onreadystatechange
function XMLHttpRequest() {
  const xhr = new _XMLHttpRequest();
  function stateChange() {
    if( xhr.readyState === 4 ) {
      console.log('请求成功 ！')
    }
  }
  // xhr.addEventListener('timeout');
  // xhr.addEventListener('error');
  xhr.addEventListener('readystatechange', stateChange)
  return xhr;
}
window.XMLHttpRequest = XMLHttpRequest

const _fetch = window.fetch();
function fetch (url, config) {
  return _fetch.call(window, url, config)
  .then(res => {
    // 上报日志信息
    console.log('相应成功！');
    // 返回结果
    return res;
  })
  .catch(error => {
    console.log('error');
  })
}
window.fetch = fetch;


