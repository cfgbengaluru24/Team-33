const mongoose = require("mongoose");
const url = process.env.MONGO_URL;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const trainerSchema = new mongoose.Schema({
  trainerid: String,
  name: String,
  marks: Number,
  gender: Number,
  experience: Number,
  assigned: Number,
  isAssigned: Boolean,
});

trainerSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Trainer = mongoose.model("Trainer", trainerSchema);

module.exports = Trainer;
