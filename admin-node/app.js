const express = require("express")
const router = require('./router')

const app =express()

// function myLogger(req, res, next) {
//     console.log('myLogger')
//     // next() 不调用next  中间件不会往下执行 而且要前置
// }
//
// app.use(myLogger)

// app.get('/', function (req, res) {
//     res.send("hello node")
// })
//
// app.post('/', function (req, res) {
//     res.json('user....')
// })

// app.get('/', function (req, res) {
//     throw new Error('error')
//
// })

// //异常处理
// function errHandler(err, req, res, next) {
//     console.log(err)
//     res.status(500).json({
//         err: -1,
//         msg: err.toString()
//     })
// }
//
// app.use(errHandler)

app.use('/', router)

const server = app.listen(5000, function () {
    const {address, port} = server.address()
    console.log('Http Serve is running on http://%s:%s', address, port)
})