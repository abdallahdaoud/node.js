const url = require('url');
const adr = "http://localhost:8080/date.html?year=2001&month=April";
let q = url.parse(adr, true);

console.log(q.hostname);
console.log(q.pathname);
console.log(q.search);

let qdata = q.query;
console.log(qdata.year);
console.log(qdata.month);