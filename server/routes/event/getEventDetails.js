const Event = require("../../schemas/event");

const getEventDetails = async (req, res) => {
  const { eventId, userId } = req.query;
  console.log(eventId);
  const event = await Event.findById(eventId).populate({
    path: "comments",
    populate: {
      path: "user",
      model: "User",
    },
  });
  console.log(event);
  if (!event) {
    return res.status(404).json({ error: "Event not found" });
  }
  res.json({
    id: event._id,
    title: event.title,
    timeStart: event.timeStart,
    timeEnd: event.timeEnd,
    joined: event.attendees.some((objId) => objId.toString() === userId),
    comments: event.comments,
  });
};

module.exports = getEventDetails;
