import streamersRouter from "./routers/streamersRouter.js";
import streamerRouter from "./routers/streamerRouter.js";
import corsMiddleware from "./middleware/cors.js";
import handleErrors from "./middleware/error.js";
import { ORIGIN } from "./config.js";
import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import connect from "./db.js";

connect();
const app = express();

const httpServer = createServer(app);
export const io = new Server(httpServer, {
  cors: {
    origin: ORIGIN,
  },
});

app.use(corsMiddleware);
app.use(express.json());
app.use(handleErrors);
app.use("/streamers", streamersRouter);
app.use("/streamer", streamerRouter);

io.on("connection", (socket) => {
  console.log(`A client connected ${socket.id}`);
  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});

const port = 8001;
httpServer.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
