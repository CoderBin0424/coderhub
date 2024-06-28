
const app = require('./app')
const { SERVER_PORT } = require('./config/server')

// 启动服务器
app.listen(SERVER_PORT, () => {
  console.log('koa服务器启动成功~')
})


