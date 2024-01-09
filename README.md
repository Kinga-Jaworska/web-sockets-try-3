### Websockets per user

Every user has own socket and can get notification from manager about approval or rejection own request

```
 socket.on("approveOrReject", ({ userId, message, status }) => {
    const targetUserSocket = connectedUsers.get(userId);

    if (targetUserSocket) {
      targetUserSocket.emit("notification", { message, status });
    }
  });
```
### Broadcast 
Emit notification to every user using broadcast

```
  socket.emit("notification", {
    message: "It's end of month you should fill forms",
    status: "info",
  });
```

### Namespaces

Every user can join to the some namespaces (Couchbase and LearnCode Academy) and got welcome notification

```
io.of("/couchbase").on("connection", (socket) => {
  console.log("COUCHBASE");
  socket.emit("namespaceNotification", { message: "Hello in Couchbase!" });
});

io.of("/learnCodingAcademy").on("connection", (socket) => {
  console.log("learnCodingAcademy");
  socket.emit("namespaceNotification", {
    message: "Hello in Learn Coding Academy!",
  });
});
```

### Rooms

Inside namespaces are created rooms (BE and FE)

```
io.of("/couchbase").on("connection", (socket) => {
  emitNamespaceNotification(socket, "Hello in Couchbase!");

  // ROOMS
  socket.on("joinRoom", (room) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room ${room}`);
  });

  socket.on("roomMessage", ({ room, message }) => {
    console.log("room", room, "message", message);
    io.of("/couchbase").to(room).emit("roomMessage", message);
  });
});
```
so you can join to room and make conversation with any other person inside this room

TODO: 
Atm its only the same notification from one connected socket to another in the same room, 
but it will be turned out into simply chat to simulate this 

