import server from "../src/express/index";

server.listen()
  .catch((err) => {
    console.error(err);
  });

export default server;
