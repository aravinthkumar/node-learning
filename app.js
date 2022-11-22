const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    let result = req.url.includes("/hello");
    if (result == true) {
        const myArray = req.url.split("=");
        res.setHeader('Content-Type', 'application/json');
        res.write(`{ { name: ${myArray[1]} },`);
        res.write('{message: "Hello"}}');
        return res.end();
    }
    if (req.url == '/message' && req.method == 'POST') {
        const body = [];
        req.on('data', (chunks) => {
            console.log(chunks);
            body.push(chunks);
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            const message = parsedBody.split("=")[1];
            fs.writeFileSync('message.txt', message);
            res.end();
        });
    }
    if (req.url == '/return') {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'application/json');
    res.write('{name: "Aravind" }');
    res.end();
});

server.listen(3000);