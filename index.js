const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const http = require("http");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs, 
    resolvers, 
  });

  await server.start(); 

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  httpServer.listen(PORT, () => {
    console.log(
      `Server is running at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

startApolloServer().catch((error) => {
  console.error("Failed to start server:", error);
});
