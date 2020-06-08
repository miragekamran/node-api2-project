const express = require("express");
const postsRouter = require("./posts/posts-router");

const server = express();
const port = 3000;

server.use(express.json());

// bring in our subrouters and attach them to the main application
server.use("/api/posts", postsRouter)

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
