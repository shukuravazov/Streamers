import { httpServer } from "./index.js";

const startServer = () => {
  const port = 8001;
  httpServer.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
};

export default startServer;
