import StreamersController from "../controllers/streamersControllers.js";
import { Router } from "express";

const streamerRouter = Router();

streamerRouter.get("/:id", StreamersController.getStreamerById);

export default streamerRouter;
