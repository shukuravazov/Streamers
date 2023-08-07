import mongoose from "mongoose";

const { Schema } = mongoose;

const streamerSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  streamingPlatform: {
    type: String,
    required: true,
    enum: ["Twitch", "YouTube", "TikTok", "Kick", "Rumble"],
  },
  description: {
    type: String,
    required: true,
    maxlength: 200,
  },
  votes: [
    {
      _id: false,
      userId: {
        type: String,
        required: true,
      },
      voteType: {
        type: String,
        enum: ["upvote", "downvote"],
        required: true,
      },
    },
  ],
  profilePicture: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
  },
  totalVotes: {
    type: Number,
    default: 0,
  },
});

const StreamerModel = mongoose.model("Streamer", streamerSchema);
export default StreamerModel;
