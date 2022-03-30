var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.appendFile('fileSystem2.html', 'hello<br>', function(err) {
        if(err) throw err;
        console.log('good hello');
    });
    fs.readFile('fileSystem2.html', function(err, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
    });
    // fs.unlink('fileSystem2.html', function(err) {
    //     if(err) throw err;
    //     console.log('deleted');
    // });
}).listen(8080);

