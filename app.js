const http = require('http');
const server = http.createServer((req,res)=> {
    res.statusCode = 200;
    res.setHeader('content-type','text/html');
    res.end('<h1>Hello Node !!!!</h1>\n')
});

const port = 3000;
server.listen(port,() => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`)
 })


