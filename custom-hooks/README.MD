- 受控组件
1. state 控制着组件的value
2. value -> change -> state成环


- 当input很多时
1. AutoBind children
2. hooks
* 自定义hooks以use开头
* 不能在类组件中使用，只能在函数组件内部
```js
function useInput() {
  return {
    value,
    onChange
  }
}
function Input2() {
  const userName = userFormInput()
  return (
    <input type="text" {...userName} />
  )
}
```

- hooks
1. useState
2. useEffect
3. useMemo 缓存一个值
4. useCallBack 缓存一个函数
5. useReducer dispatch -> action -> reducer -> state