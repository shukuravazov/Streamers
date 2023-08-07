import { io } from "socket.io-client";
import { BASE_URL } from "./api/streamersApi";

export const socket = io(BASE_URL);
