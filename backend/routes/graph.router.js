const express = require("express");
const graphRouter = express.Router();
const graphController=require('../controller/graph.controller')

graphRouter.get('/graph-data',graphController.getGraphData)
graphRouter.get('/graph-analytics',graphController.getGraphAnalytics)


module.exports={graphRouter}