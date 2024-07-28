const trainerRouter = require("express").Router();
const Trainer = require("../models/trainer");
const TUser = require("../models/TUser");
trainerRouter.post("/", async (request, response) => {
  const { trainerid, name, marks, gender, experience, assigned } = request.body;
  const trainer = new Trainer({
    trainerid,
    name,
    marks,
    gender,
    experience,
    assigned,
    isAssigned: false,
  });
  const savedTrainer = await trainer.save();
  response.status(201).json(savedTrainer);
});
trainerRouter.post("/join?", async (request, response) => {
  const { trainerid, assigned } = request.body;
  console.log(assigned);
  const trainer = await TUser.findOne({
    trainerid: trainerid,
  });
  console.log(trainer);
  const tr = new Trainer({
    trainerid: trainer.trainerid,
    name: trainer.name,
    marks: trainer.marks,
    gender: trainer.gender,
    experience: trainer.experience,
    assigned: assigned,
    isAssigned: false,
  });
  const savedTrainer = await tr.save();
  response.status(201);
});
trainerRouter.post("/create", async (request, response) => {
  const { trainerid, name, marks, gender, experience } = request.body;
  const tr = new TUser({
    trainerid,
    name,
    marks,
    gender,
    experience,
  });
  const savedTrainer = await tr.save();
  response.status(201).json(savedTrainer);
});
trainerRouter.get("/assign", async (request, response) => {
  const trainerid = request.query.user;
  const camp = request.query.assign;
  const remove = request.query.remove == 1 ? false : true;
  console.log(camp);
  await Trainer.findOneAndUpdate(
    { trainerid: trainerid, assigned: Number(camp) },
    { isAssigned: remove }
  );
  response.status(201).json({ ok: "ok" });
});
trainerRouter.get("/", async (request, response) => {
  const campId = request.query.camp;
  const mode = request.query.mode == 0 ? false : true;
  const trainers = await Trainer.find({
    assigned: Number(campId),
    isAssigned: mode,
  });
  console.log(trainers);
  response.json(trainers);
});
trainerRouter.post("/cheat", async (request, response) => {
  const { username, password } = request.body;
  const trainer = await TUser.findOne({
    trainerid: username,
  });
  response.json(trainer);
});

module.exports = trainerRouter;
