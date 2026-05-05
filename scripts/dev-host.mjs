import { startServer } from "next/dist/server/lib/start-server.js";

const port = Number(process.env.PORT || 3000);
const hostname = process.env.HOSTNAME || "0.0.0.0";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.NEXT_PRIVATE_START_TIME = String(Date.now());

startServer({
  dir: process.cwd(),
  isDev: true,
  hostname,
  port,
  allowRetry: true,
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
