import StreamerModel from "../models/streamerModel.js";

const streamerService = {
  fetchAllStreamers: async () => {
    return await StreamerModel.find().exec();
  },

  createStreamer: async (streamerData) => {
    return await StreamerModel.create(streamerData);
  },

  fetchStreamerById: async (streamerId) => {
    const streamer = await StreamerModel.findById(streamerId).exec();
    if (!streamer) {
       throw new Error("Stremaer not found");
    }
    return streamer;
  },

  updateVote: async (streamerId, userId, voteType) => {
    if (voteType !== "upvote" && voteType !== "downvote") {
      return res.status(400).json({ message: "Invalid vote type" });
    }

    let streamer = await StreamerModel.findById(streamerId);
    if (!streamer) {
      return res.status(404).json({ message: "Stremaer not found" });
    }

    const existingVoteIndex = streamer.votes.findIndex(
      (vote) => vote.userId === userId
    );

    if (existingVoteIndex !== -1) {
      const existingVoteType = streamer.votes[existingVoteIndex].voteType;

      if (existingVoteType === voteType) {
        streamer.votes.splice(existingVoteIndex, 1);
      } else {
        streamer.votes[existingVoteIndex].voteType = voteType;
      }
    } else {
      streamer.votes.push({ userId, voteType });
    }

    const totalUpvotes = streamer.votes.filter(
      (vote) => vote.voteType === "upvote"
    ).length;
    const totalDownvotes = streamer.votes.filter(
      (vote) => vote.voteType === "downvote"
    ).length;

    streamer.totalVotes = totalUpvotes - totalDownvotes;
    streamer = await streamer.save();
    return streamer;
  },
};

export default streamerService;
