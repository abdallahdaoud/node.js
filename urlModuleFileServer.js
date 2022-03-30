const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function(req, res) {
    let q = url.parse(req.url, true);
    let pathName = "." + q.pathname;

    fs.readFile(pathName, function(err, data) {
        if(err) {
            res.writeHead(404, {'Content-TypeError' : 'text/html'});
            return res.end("Not Found");
        }
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    })
}).listen(8080);