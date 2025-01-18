const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const http = require("http");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs, // your schema definitions
    resolvers, // your resolvers
  });

  await server.start(); // Wait for the server to start

  server.applyMiddleware({ app }); // Integrate Apollo Server with Express

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
