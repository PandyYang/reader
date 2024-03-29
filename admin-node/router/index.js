const express = require('express')
const boom = require("boom")
const userRouter = require('./user')
const {
    CODE_ERROR
} = require('../utils/constant')

//注册路由
const router = express.Router()

router.get('/', function (req, res) {
    res.send('欢迎')
})

router.use('/user', userRouter)

router.use((req, res, next)=> {
    next(boom.notFound('接口不存在'))
})

router.use((err, req, res, next) => {
    const msg = (err && err.message) || '系统错误'
    const statusCode = (err.output && err.output.statusCode) || 500;
    const errorMsg = (err.output && err.output.payload && err.output.payload.error) || err.message
    res.status(statusCode).json({
        code: CODE_ERROR,
        msg,
        error: statusCode,
        errorMsg
    })
})

module.exports = router