/**node server */
const http = require('http')
const port = 3001
const host = 'localhost'



const requestListener = async (req, res)=>{
    res.setHeader('Content-Type','text/html')
    res.writeHead(200)
    res.end('<html><body><h1>this is page in node teste server</h1></body></html>')
}
const app = http.createServer(requestListener)
app.listen(port,host,()=>{
    console.log(`http://${host}:${port}`)
})

/*
comandos de execução:

este comando é usado no terminal de
teste ou deploy do servidor:

node app-simple-test.js


só funciona em teminal linux

comando para conexão a partir de um terminal remoto
curl http:localhost:3001

só funciona em teminal linux
*/