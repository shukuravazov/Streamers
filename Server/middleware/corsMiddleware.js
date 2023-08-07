import cors from "cors";
import { ORIGIN } from "../config.js";

const corsOptions = {
  origin: ORIGIN,
  methods: "GET,POST,PUT",
  allowedHeaders: "Content-Type,Authorization",
};

const corsMiddleware = cors(corsOptions);
export default corsMiddleware;
