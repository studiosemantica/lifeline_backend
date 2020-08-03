const Case = require("../models/Case.js");

//INDEX - GETS ALL CASES
const index = async (req, res) => {
  try {
    const allCases= await Case.find({});
    res.status(200).json(allCases);
  } catch (error) {
    res.status(400).send(error);
  }
};

//CREATE - Makes a new CASE
const create = async (req, res) => {
  try {
    const newCase = await Case.create(req.body);
    res.status(200).json(newCase);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Update - updates a case

const update = async (req, res) => {
  try {
    const updatedCase = await Case.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedCase);
  } catch (error) {
    res.status(400).send(error);
  }
};

//destroy - deletes a case

const destroy = async (req, res) => {
  try {
    const deletedCase = await Case.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedCase);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
    index,
    create,
    update,
    destroy
}