import streamersController from "../controllers/streamersControllers.js";
import { Router } from "express";

const streamerRouter = Router();

streamerRouter.get("/:id", streamersController.getStreamerByIdController);

export default streamerRouter;
