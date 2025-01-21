import { Server } from "./server/infrastructure/server.js";

function bootstap() {
  const server = new Server();
  server.start(4000);
}

bootstap();