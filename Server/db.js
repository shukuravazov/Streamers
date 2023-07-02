import mongoose from "mongoose";
import { URI } from "./config.js";

export default async function connect() {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log(error);
  }
}
