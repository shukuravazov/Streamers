import express from "express";
import corsMiddleware from "./middleware/corsMiddleware.js";
import handleErrorMiddleware from "./middleware/handleErrorMiddleware.js";
import streamersRouter from "./routers/streamersRouter.js";
import streamerRouter from "./routers/streamerRouter.js";

const setupApp = () => {
  const app = express();
  app.use(corsMiddleware);
  app.use(express.json());
  app.use("/streamers", streamersRouter);
  app.use("/streamer", streamerRouter);
  app.use(handleErrorMiddleware);
  return app;
};

export default setupApp;
