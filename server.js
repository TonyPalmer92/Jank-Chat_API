require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./app/routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Navigation
app.use("/api/v1", routes);

// 404 / error handler below

module.exports = app;
