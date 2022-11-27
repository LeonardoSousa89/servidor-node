/**node server */
const http = require('http')
const port = 3001
const host = 'localhost'

const requestListener = async (req, res)=>{
    res.setHeader('Content-Type','text/csv')
    res.setHeader('Content-Disposition','attachment;filename=oceanpals.csv')
    res.writeHead(200)
    res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com`)
}
const app = http.createServer(requestListener)
app.listen(port,host,()=>{
    console.log(`http://${host}:${port}`)
})

/*
comandos de execução:

este comando é usado no terminal de
teste ou deploy do servidor:

node csv.js






só funciona em teminal linux

comando para conexão a partir de um terminal remoto
curl http:localhost:3001

só funciona em teminal linux
*/
