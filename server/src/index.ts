import express = require("express");
import http = require("http");
import socketIo = require("socket.io");
import moment = require("moment")
import db = require("./database")
const wildfireRoutes = require("./routes/wildfire");
const userRoutes = require("./routes/user")
const port = process.env.PORT || 4001;

const app = express();

wildfireRoutes(app, db);
userRoutes(app)

const server = http.createServer(app);

const io = socketIo(server); // < Interesting!

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.emit("connected", true)
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

let loops = 0;
const getApiAndEmit = socket => {
  
  loops++

  const response = {
    loops,
    time: moment().format()
  }
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

server.listen(port, () => console.log(`Listening on port ${port}`));
