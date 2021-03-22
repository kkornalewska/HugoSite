const http = require('http');
const PORT = 2222;
// Create Node.js server
const server = http.createServer((req, res) => {
    // only accept POST requests
    if (req.method === 'POST') {

        // Read POST body (contact form data)
        let body = '';
        req.on('data', data => {body += data})
        // Handle POST received
        req.on('end', () => {
            console.log(body);
            // Respond
            res.writeHead(200, {'Content-Type': 'tect/plain'});
            res.end('success');

        })
    }
})


// Listen for contact form submissions
server.listen(PORT);
console.log(`Server is listening on port ${PORT}.`)
