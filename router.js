const requestHandler = (req, res) => {
    console.log('Entering request handler to serve the requests');
    if (req.url == "/") {
        console.log('Entered / end-point');
        res.setHeader("Content-type", "text/html");
        res.write('<html>');
        res.write('<head><title>Create User</title><head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (req.url == "/users") {
        console.log('Entered /user end-point');
        res.setHeader("Content-type", "text/html");
        res.write("<html><head> <title>Welcome</title></head>");
        res.write("<ul><li>User1</li></ul> <ul><li>User2</li></ul></html>")
        return res.end();
    }
    if (req.url == "/create-user" && req.method == "POST") {
        console.log("Entered /create-user");
        console.log("Preparing to create a user");
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
            console.log("chunk data from the body: " + body)
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log("parsed body: " + parsedBody);
            const user = parsedBody.split("=")[1];
            console.log("user is created : " + user);
            return res.end();
        })
    }

};

module.exports = requestHandler;