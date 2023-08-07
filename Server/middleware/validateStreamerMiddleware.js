import validateStreamerInput from "../utils/streamerValidation.js";

export const validateStreamerInputMiddleware = (req, res, next) => {
  const { error } = validateStreamerInput(req.body);
  if (error) {
    return res.status(400).json({ errors: error });
  }
  next();
};
