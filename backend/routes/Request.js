const express = require("express")
const RequestRouter = express.Router()
const {index, create, update, destroy} = require("../controllers/Request.js")

//Get all Requests
RequestRouter.get("/", index)

//Create New Request
RequestRouter.post("/", create)

//Update a Request
RequestRouter.put("/:id", update)

//Destroy a Request
RequestRouter.delete("/:id", destroy)

module.exports = RequestRouter