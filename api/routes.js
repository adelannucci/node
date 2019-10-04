const fs = require('fs');
const users = ["andre", "Luiz"];

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Create a User</title><head>');
        res.write('</body>');
        res.write('<h4>Insert name:</h4>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="user-name"><button type="submit">Send</button></form>');
        res.write('<a href="/users"><button>Users</button></a>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (value) => {
            body.push(value);            
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const name = parsedBody.split('=')[1];
            console.log(name);
            users.push(name);
        })
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users</title></head>');

        res.write('<body><h1>Users!!</h1>');

        res.write('<ul>');
        users.forEach(user => {
            res.write('<li><h1>'+user+'</h1></li>');
        });
        res.write('</ul>');
        res.write('<a href="/"><button>Create Users</button></a>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
}

exports.handler = requestHandler;