const http = require("http");

const app = require("./server");

const server = http.createServer(app);

const port = process.env.PORT;
server.listen(port, () => console.log(`Listening on port: ${port}`));
