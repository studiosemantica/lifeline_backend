const express = require("express");
const CaseRouter = express.Router();
const { index, create, update, destroy } = require("../controllers/Case.js");

//ROUTES!

//get all cases
CaseRouter.get("/", index);

//create a new case
CaseRouter.post("/", create);

//updating a case
CaseRouter.put("/:id", update);

//destroy a case
CaseRouter.delete("/:id", destroy);

module.exports = CaseRouter;