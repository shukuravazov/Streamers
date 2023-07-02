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
  votes: {
    type: Number,
    default: 0,
  },
  profilePicture: {
    type: String,
    default:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png",
  },
});

const Streamer = mongoose.model("Streamer", streamerSchema);
export default Streamer;
