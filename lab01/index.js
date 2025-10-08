const http = require('http');
const path = require("path");
const util = require("util");
const v8 = require("v8");
const repeat = require('repeat-string');

const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer(function(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end(repeat('modul \'repeat\' sluzy do wielokrotnego powtarzania ciagow znakow.\n', 10));
    console.log('Opis modułu repeat: Repeat the given string the specified number of times.');
});

server.listen(port, hostname, () => {
    util.debuglog(v8.getHeapStatistics());
    console.log(path.basename(__filename));
    util.debuglog(path.join(__dirname, 'uploads','images'));
    console.log(`Server running at http://${hostname}:${port}/`);
});