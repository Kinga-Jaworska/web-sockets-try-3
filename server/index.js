const express = require("express");

const app = express();
const http = require("http");

const { Server } = require("socket.io");

const cors = require("cors");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const connectedUsers = new Map();

io.on("connection", (socket) => {
  console.log(`User ${socket.id} connected.`);

  socket.on("login", (userId) => {
    connectedUsers.set(userId, socket);
    console.log(`User ${userId} logged in.`);
  });

  socket.on("disconnect", () => {
    const userId = Array.from(connectedUsers.keys()).find(
      (key) => connectedUsers.get(key) === socket
    );
    connectedUsers.delete(userId);
    console.log(`User ${userId} disconnected.`);
  });

  socket.N("approveOrReject", ({ userId, message }) => {
    const targetUserSocket = connectedUsers.get(userId);

    if (targetUserSocket) {
      targetUserSocket.emit("notification", { message });
    }
  });
});

server.listen(3003, () => {
  console.log("SERVER IS RUNNING");
});