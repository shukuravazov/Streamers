import asyncHandler from "express-async-handler";
import streamerService from "../services/streamerServices.js";
import { io } from "../index.js";

const streamersController = {
  getAllStreamersController: asyncHandler(async (_, res, next) => {
    try {
      const allStreamers = await streamerService.fetchAllStreamers();
      res.send(allStreamers);
    } catch (error) {
      next(error);
    }
  }),

  createStreamerController: asyncHandler(async (req, res, next) => {
    const { name, streamingPlatform, description } = req.body;
    const streamerData = {
      name,
      streamingPlatform,
      description,
    };

    try {
      const newStreamer = await streamerService.createStreamer(streamerData);

      io.emit("getAddedStreamer", {
        ...newStreamer.toObject(),
      });

      res.status(201).json({
        message: "New streamer created",
      });
    } catch (error) {
      next(error);
    }
  }),

  getStreamerByIdController: asyncHandler(async (req, res, next) => {
    const streamerId = req.params.id;

    try {
      const streamerById = await streamerService.fetchStreamerById(streamerId);
      res.send(streamerById);
    } catch (error) {
      next({ status: 404, message: "Streamer not found" });
    }
  }),

  upvoteStreamerController: asyncHandler(async (req, res, next) => {
    const { streamerId } = req.params;
    const { voteType, userId } = req.body;

    try {
      const updatedStreamer = await streamerService.updateVote(
        streamerId,
        userId,
        voteType
      );

      io.emit("upvotedStreamer", {
        ...updatedStreamer.toObject(),
        totalVotes: updatedStreamer.totalVotes,
      });

      res.status(200).json({
        message: "Vote updated",
      });
    } catch (error) {
      next(error);
    }
  }),
};

export default streamersController;
