// const express = require('express')
import express from 'express'

/**
 * 构建在 虚拟dom之上的 服务端渲染
 * 浏览器： react-dom div
 * 将虚拟dom转换成字符串的HTML
 * 服务端： 字符串的 html
 * 同构
 */

const app = new express();
app.get('*', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <div id="app">hello server</div>
  </body>
  </html>
  `)
})
app.listen(3000, () => {
  console.log('server is running http://localhost:3000')
})