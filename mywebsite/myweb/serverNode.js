const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.url}`);
    
    if (req.url === "/" || req.url === "/index_combined.html") {
        // Serve the combined HTML file
        fs.readFile(path.join(__dirname, "index_combined.html"), "utf-8", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end("Error loading index_combined.html");
                return;
            }
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        });
    }
    else if (req.url === "/style.css") {
        fs.readFile(path.join(__dirname, "style.css"), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end("Error loading style.css");
                return;
            }
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/css");
            res.end(data);
        });
    }
    else if (req.url === "/script.js") {
        fs.readFile(path.join(__dirname, "script.js"), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end("Error loading script.js");
                return;
            }
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/javascript");
            res.end(data);
        });
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
