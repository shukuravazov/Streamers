import { Router } from "express";
import streamersController from "../controllers/streamersControllers.js";
import { validateStreamerInputMiddleware } from "../middleware/validateStreamerMiddleware.js";

const streamersRouter = Router();

streamersRouter.post(
  "/",
  validateStreamerInputMiddleware,
  streamersController.createStreamerController
);
streamersRouter.get("/", streamersController.getAllStreamersController);
streamersRouter.put(
  "/:streamerId/vote",
  streamersController.upvoteStreamerController
);

export default streamersRouter;
