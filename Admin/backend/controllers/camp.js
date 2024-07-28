// const express = require("express");
// const Camp = require("../models/camp"); // Adjust the path as necessary
// const campRouter = express.Router();

// // POST request to add a new camp
// campRouter.post("/", async (req, res) => {
//   const { id, camp_loc, camp_date } = req.body;

//   try {
//     // Check if the provided id already exists
//     const existingCamp = await Camp.findOne({ id });
//     if (existingCamp) {
//       return res
//         .status(400)
//         .json({ error: "Camp with this ID already exists." });
//     }

//     // Create a new camp
//     const camp = new Camp({
//       id,
//       camp_loc,
//       camp_date,
//     });

//     const savedCamp = await camp.save();
//     res.status(201).json(savedCamp);
//   } catch (error) {
//     res.status(500).json({ error: error.message }); // Use 500 for server errors
//   }
// });

// module.exports = campRouter;

const express = require("express");
const Camp = require("../models/camp"); // Adjust the path as necessary
const campRouter = express.Router();
const Trainer = require("../models/trainer");
// POST request to add a new camp
campRouter.post("/", async (req, res) => {
  const { id, camp_loc, camp_date } = req.body;

  try {
    // Check if the provided id already exists
    const existingCamp = await Camp.findOne({ id });
    if (existingCamp) {
      return res
        .status(400)
        .json({ error: "Camp with this ID already exists." });
    }

    // Create a new camp
    const camp = new Camp({
      id,
      camp_loc,
      camp_date,
    });

    const savedCamp = await camp.save();
    res.status(201).json(savedCamp);
  } catch (error) {
    res.status(500).json({ error: error.message }); // Use 500 for server errors
  }
});
campRouter.get("/", async (req, res) => {
  const trainerid = req.query.tid;
  try {
    // Create a new camp
    const trainers = await Trainer.find({ trainerid: trainerid });
    const cTrainers = trainers.map((trainer) => trainer.assigned);
    console.log(cTrainers);
    const camps = await Camp.find({ id: { $nin: cTrainers } });
    res.json(camps);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = campRouter;
