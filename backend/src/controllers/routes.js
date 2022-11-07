const express = require("express");
const Router = express.Router();
const create = require('./create')
const read = require('./read')
const readAll = require('./readAll')

Router.post("/create", create)
Router.post("/read", read)
Router.get("/readAll", readAll)

module.exports = Router;
