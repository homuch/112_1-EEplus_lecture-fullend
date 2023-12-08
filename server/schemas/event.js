const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  dateStart: {
    type: Date,
    required: true,
  },
  dateEnd: {
    type: Date,
    required: true,
  },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments_user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments_text: [{ type: String }],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
