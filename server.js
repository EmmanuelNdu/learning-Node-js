import http from 'http'
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // console.log(req.url)
    // console.log(req.method)

    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>Homepage</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>About</h1>');
    } else {
        res.writeHead(400, {'Content-Type': 'text/html'})
        res.end('<h1>Not Found</h1>')
    }
   
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});