var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.write("My Nodejs<br>");
  res.write(req.url + "<br>");
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write(txt + "<br>");
  res.end(txt);
}).listen(8080);