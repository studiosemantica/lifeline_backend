const Request = require("../models/Request.js");
const Case = require("../models/Case.js");

//INDEX - Get all the requests with their cases

const index = async (req, res) => {
  try {     


//   const allRequests = await Request.find({});
//   res.status(200).json(allRequests);
// } catch (error) {
//   res.status(400).send(error);
// }


    //get array of requests with case ids
    const allRequests = await Request.find({});

    //create a new array of requests with the case info
    const requests = allRequests.map(async (request) => {
    const theCase = await Case.findById(request.case);
    // console.log(requests);
      return {
        _id: request._id,
        name: request.name,
        case: theCase,
        phone: request.phone,
        email: request.email,
        location: request.location,
        description: request.description,
        createdAt: request.createdAt,
        updatedAt: request.updatedAt
        };
    });
    console.log(requests);
    const requests2 = await Promise.all(requests);
    await res.status(200).json(requests2);


  } catch (error) {
    res.status(400).send(error);
  }
};

const create = async (req, res) => {
  try {
    const newRequest = await Request.create(req.body);
    res.status(200).json(newRequest);
  } catch (error) {
    res.status(400).send(error);
  }
};

const update = async (req, res) => {
  try {
    const updatedRequest = await Request.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedRequest);
  } catch (error) {
    res.status(400).send(error);
  }
};

const destroy = async (req, res) => {
  try {
    const deletedRequest = await Request.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedRequest);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  index,
  create,
  update,
  destroy,
};
