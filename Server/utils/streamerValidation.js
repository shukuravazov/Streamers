import Joi from "joi";

const validateStreamerInput = (streamer) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(75).required().messages({
      "string.empty": "Name is required.",
      "string.min": "Name must be at least 3 characters.",
      "string.max": "Name can be at most 75 characters.",
    }),
    streamingPlatform: Joi.string()
      .valid("Twitch", "YouTube", "TikTok", "Kick", "Rumble")
      .required()
      .messages({
        "string.empty": "Streaming platform is required.",
        "any.only": "Invalid streaming platform.",
      }),
    description: Joi.string().max(200).required().messages({
      "string.empty": "Description is required.",
      "string.max": "Description can be at most 200 characters.",
    }),
  });

  const { error, value } = schema.validate(streamer, { abortEarly: false });
  if (error) {
    const validationErrors = {};
    error.details.forEach((err) => {
      validationErrors[err.context.key] = err.message;
    });
    return { error: validationErrors };
  }

  return { value };
};

export default validateStreamerInput;
