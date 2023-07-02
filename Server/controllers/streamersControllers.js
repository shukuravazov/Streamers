import Streamer from "../models/streamerModel.js";
import validateStreamer from "../utils/validation.js";
import asyncHandler from "express-async-handler";
import { io } from "../index.js";

const StreamersController = {
  getAllStreamers: asyncHandler(async (_, res, next) => {
    const streamers = await Streamer.find().exec();
    res.send(streamers);
  }),

  addStreamer: asyncHandler(async (req, res, next) => {
    const { error } = validateStreamer(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const streamerData = {
      name: req.body.name,
      streamingPlatform: req.body.streamingPlatform,
      description: req.body.description,
    };

    const newAddedStreamer = new Streamer(streamerData);
    await newAddedStreamer.save();
    io.emit("getAddedStreamer", newAddedStreamer);
    res.status(201).json({ message: "New streamer created", newAddedStreamer });
  }),

  getStreamerById: asyncHandler(async (req, res, next) => {
    const streamerId = req.params.id;
    const streamer = await Streamer.findById(streamerId).exec();
    if (!streamer)
      return res.status(404).json({ message: "Streamer not found" });
    res.send(streamer);
  }),

  upvoteStreamer: asyncHandler(async (req, res, next) => {
    const streamerId = req.params.id;
    const voteType = req.body.voteType;

    let upvotedStreamer;

    if (voteType === "upvote") {
      upvotedStreamer = await Streamer.findByIdAndUpdate(
        streamerId,
        { $inc: { votes: 1 } },
        { new: true }
      );
      io.emit("upvotedStreamer", upvotedStreamer);
    } else if (voteType === "downvote") {
      upvotedStreamer = await Streamer.findByIdAndUpdate(
        streamerId,
        { $inc: { votes: -1 } },
        { new: true }
      );
      io.emit("upvotedStreamer", upvotedStreamer);
    }
    if (!upvotedStreamer) {
      return res.status(404).json({ message: "Streamer not found" });
    }

    await upvotedStreamer.save();
    res
      .status(200)
      .json({ message: "Vote updated", streamer: upvotedStreamer });
  }),
};

export default StreamersController;
