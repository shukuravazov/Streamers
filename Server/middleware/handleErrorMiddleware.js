const handleErrorMiddleware = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
};

export default handleErrorMiddleware;
