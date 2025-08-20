// * ---- Packages ----
const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");


// * Create App
const app = express();

// * ---- Listening ----
app.listen(3000, "127.0.0.1", () =>
    console.log(`Server running on localhost:3000`)
);
