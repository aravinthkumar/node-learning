const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    let result = req.url.includes("/message");
    if (result == true) {
        const myArray = req.url.split("=");
        res.setHeader('Content-Type', 'application/json');
        res.write(`{ { name: ${myArray[1]} },`);
        res.write('{message: "Hello"}}');
        return res.end();
    }
    res.setHeader('Content-Type', 'application/json');
    res.write('{name: "Aravind" }');
    res.end();
});

server.listen(3000);