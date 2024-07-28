const mongoose = require("mongoose");
const url = process.env.MONGO_URL;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const TUserSchema = new mongoose.Schema({
  trainerid: String,
  name: String,
  marks: Number,
  gender: Number,
  experience: Number,
});

TUserSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const TUser = mongoose.model("TUser", TUserSchema);

module.exports = TUser;
