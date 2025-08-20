// * ---- Packages ----
const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");


// * Create App
const app = express();

// * ---- Mongoose Connection ----
mongoose.connect("mongodb://127.0.0.1/graphql-movie-api");
mongoose.connection.once("open", () => {
  console.log(`Connect to DB successfully`);
});

// * ---- Listening ----
app.listen(3000, "127.0.0.1", () =>
    console.log(`Server running on localhost:3000`)
);
