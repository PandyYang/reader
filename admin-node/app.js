const express = require("express")

const app =express()

function myLogger(req, res, next) {
    console.log('myLogger')
    // next() 不调用next  中间件不会往下执行 而且要前置
}

app.use(myLogger)

app.get('/', function (req, res) {
    res.send("hello node")
})

const server = app.listen(5000, function () {
    const {address, port} = server.address()
    console.log('Http Serve is running on http://%s:%s', address, port)
})