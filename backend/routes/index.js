const express = require("express");
const router = express.Router();
const { graphRouter } = require("./graph.router");

router.use("/", graphRouter);



module.exports = { router };