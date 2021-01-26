const http = require ('http')
const bind = require ('bind')
require ('url') 

const server = http.createServer ((req, res) => {
    let myUrl = new URL (req.url, 'http://example.com')
    
    if (myUrl.pathname === '/scuola.html') {
        bind.toFile('Page_con_Tutto/scuola.html', {}, data => {
            res.writeHead (200, {'content-type':'text/html'})
            res.end (data)
        })
    } /*else if (myUrl.pathname === '/giochi.html') {}*/
        else {
            bind.toFile ('Page_con_Tutto/Index.html', {}, data => {
                res.writeHead (200, {'content-type':'text/html'})
                res.end (data)
        })
    }
})

server.listen (8080)
