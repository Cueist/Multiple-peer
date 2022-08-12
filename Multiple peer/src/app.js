const path = require("path");
const express = require("express");
const app = express();

const http = require("http");

//////// CONFIGURATION ///////////

const port = process.env.PORT || 3000;

////////////////////////////

const httpServer = http.createServer(app);
const io = require("socket.io")(httpServer);
require("./socketController")(io);

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.static(path.join(__dirname, "..", "node_modules")));

httpServer.listen(port, () => {
  console.log(`listening on port ${port}`);
});
