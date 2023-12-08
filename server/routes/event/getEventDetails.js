const Event = require("../../schemas/event");

const getEventDetails = async (req, res) => {
  const { eventId, userId } = req.query;
  const event = await Event.findById(eventId);
  res.json({
    id: event._id,
    title: event.title,
    dateStart: event.dateStart,
    dateEnd: event.dateEnd,
    joined: event.attendees.some(({ _id }) => _id === userId),
    comments: event.comments_user.map((user, index) => ({
      id: index,
      userName: user.name,
      text: event.comments_text[index],
    })),
  });
};

module.exports = getEventDetails;
