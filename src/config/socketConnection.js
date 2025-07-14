const socketIo = require("socket.io");

const setupSocket = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true
    }
  });

  io.on("connection", (socket) => {
    console.log("✅ New client connected:", socket.id);

    socket.on("joinRoom", ({ roomId }) => {
      socket.join(roomId);
      console.log(`📥 User joined room: ${roomId}`);
    });

    socket.on("sendMessage", ({ sender, receiverRoomId, message }) => {
      console.log(`💬 Message from ${sender} to ${receiverRoomId}: ${message}`);

      io.to(receiverRoomId).emit("receiveMessage", {
        sender,
        message,
        timestamp: new Date(),
      });
    });

    socket.on("disconnect", () => {
      console.log("❌ Client disconnected");
    });
  });
};

module.exports = { setupSocket };
