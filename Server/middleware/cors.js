import { ORIGIN } from "../config.js";
import cors from "cors";

const corsOptions = {
  origin: ORIGIN,
  methods: "GET,POST,PUT",
  allowedHeaders: "Content-Type,Authorization",
};

const corsMiddleware = cors(corsOptions);
export default corsMiddleware;
