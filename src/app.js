import server from "./express";

server.listen()
  .catch((err) => {
    console.error(err);
  });

export default server;
