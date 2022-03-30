var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<body style="background: linear-gradient(25deg, green, orange); display: flex; justify-content: center; align-items: center; padding-top: 3vh;"><h1>Daoud Network!</h1><script>async function blink() {function sleep(t) {return new Promise(resolve => setTimeout(resolve, t));};for(;true;) {document.getElementsByTagName("h1")[0].style="text-shadow: 0 0 1em red;";await sleep(300);document.getElementsByTagName("h1")[0].style="";await sleep(300);};};blink();</script></body>');
}).listen(8080);
