const express = require("express");
const time_stamp = require("../../lib/middleware/time_stamp");
const routes = express.Router();

const message_controller = require("../controllers/message_controller");

/*
  Route: /api/v1
*/

// POST - creates new record in DB
routes.post("/message", time_stamp, message_controller.postMessage);

module.exports = routes;
