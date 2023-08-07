import setupApp from "./app.js";
import setupSocketIO from "./socketSetup.js";
import connect from "./db.js";
import startServer from "./server.js";

const app = setupApp();
export const { httpServer, io } = setupSocketIO(app);
connect();
startServer();
