import Joi from "joi";

const validateStreamer = (streamer) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(75).required(),
    streamingPlatform: Joi.string()
      .valid("Twitch", "YouTube", "TikTok", "Kick", "Rumble")
      .required(),
    description: Joi.string().max(200).required(),
  });
  return schema.validate(streamer);
};

export default validateStreamer;
