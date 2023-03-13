import "dotenv/config";

import server from "./server";
import env from "./config/env.config";

const port = parseInt(env.port || "4000");

const starter = new server()
  .start(port)
  .then((port) => console.log(`Running on port ${port}`))
  .catch((error) => {
    console.log(error);
  });

export default starter;
