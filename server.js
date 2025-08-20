// * ---- Packages ----
const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");

// ** ---- DotEnv ----
require("dotenv").config();


// * Create App
const app = express();

// * ---- Mongoose Connection ----
mongoose.connect("mongodb://127.0.0.1/graphql-movie-api");
mongoose.connection.once("open", () => {
  console.log(`Connect to DB successfully`);
});

// * ---- Listening ----
app.listen(process.env.PORT, "127.0.0.1", () =>
    console.log(`Server running on localhost:${process.env.PORT}`)
);
