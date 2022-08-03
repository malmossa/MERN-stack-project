const mongoose = require("mongoose");

const goalSchema = mongoose.goalSchema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.mnodel("Goal", goalSchema);
