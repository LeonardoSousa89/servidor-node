/**server node */
const http = require('http')
const { resolve } = require('path')
const host = 'localhost'
const port = 3001


const requestListener = function (req,res){
   res.writeHead(200)
   res.end('server')
} 
const server = http.createServer(requestListener)
server.listen(port, host, ()=>{
    console.log(`server is running in: ${host}: ${port}`)
})

/*
comandos de execução:

este comando é usado no terminal de
teste ou deploy do servidor:

node server-test.js






só funciona em teminal linux

comando para conexão a partir de um terminal remoto
curl http:localhost:3001

só funciona em teminal linux
*/
