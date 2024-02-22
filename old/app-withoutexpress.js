const http = require('http')
http.createServer( (request,response) =>{

    response.writeHead(200, {'Content-Type':'application/json'})
    // response.writeHead(200, {'Content-Type':'text/plain'})-- renderizo texto plano en la app por el content type
    //res.setHeader('Content-Disposition','attachment: filename=lista.csv' )
    //res.writeHead(200,{'Content-Type': 'application/csv'})
    const persona = {
        id:1,
        nombre:'Julio'
    }
    response.write(JSON.stringify(persona))
    response.end()
})
.listen ( 8080 )
