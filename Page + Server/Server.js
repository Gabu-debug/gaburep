const http = require ('http')
const bind = require ('bind')
require ('url') 

const server = http.createServer ((req, res) => {
    let myUrl = new URL (req.url, 'http://example.com')
    
    if (myUrl.pathname === '/scuola.html') {
        bind.toFile('scuola_complessivo.html', {}, data => {
            res.writeHead (200, {'content-type':'text/html'})
            res.end (data)
        })
    } /*else if (myUrl.pathname === '/giochi.html') {}*/
        else {
            bind.toFile ('home_complessiva.html', {}, data => {
                res.writeHead (200, {'content-type':'text/html'})
                res.end (data)
        })
    }
})

server.listen (8080)