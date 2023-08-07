import { Server } from "socket.io";
import { createServer } from "http";
import { ORIGIN } from "./config.js";

const setupSocketIO = (app) => {
  const httpServer = createServer(app);
  const io = new Server(httpServer, {
    cors: {
      origin: ORIGIN,
    },
  });

  io.on("connection", (socket) => {
    console.log(`A client connected ${socket.id}`);
    socket.on("disconnect", () => {
      console.log("A client disconnected");
    });
  });

  return { httpServer, io };
};

export default setupSocketIO;
