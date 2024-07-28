const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for Camp
const campSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true, // Ensure the ID is unique
    },
    camp_loc: {
      type: String,
      required: true,
    },
    camp_date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
); // Added timestamps

campSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// Create the model from the schema
const Camp = mongoose.model("Camp", campSchema);

module.exports = Camp;
