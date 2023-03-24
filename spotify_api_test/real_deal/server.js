var http = require('http');

http
    .createServer(function(request, response)
    {
        response.writeHead(200, { 'Content-Type': 'text/plain'});
        response.write('Hello World');
        response.end();
    })
    .listen(8888);

//API nem értem, hogy működik
//mostmár működik a node app.js