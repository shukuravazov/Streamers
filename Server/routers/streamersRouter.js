import StreamersController from "../controllers/streamersControllers.js";
import { Router } from "express";

const streamersRouter = Router();

streamersRouter.post("/", StreamersController.addStreamer);
streamersRouter.get("/", StreamersController.getAllStreamers);
streamersRouter.put("/:id/vote", StreamersController.upvoteStreamer);

export default streamersRouter;
