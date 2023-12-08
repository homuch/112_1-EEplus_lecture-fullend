const Event = require("../../schemas/event");

const getEvents = async (req, res) => {
  const { search, userId } = req.query;
  const events = await Event.find({ title: search });
  res.json(
    events.map(({ title, attendees, _id }) => ({
      title,
      id: _id,
      inInterests: attendees.length,
      joined: attendees.some(({ _id }) => _id === userId),
    }))
  );
};

module.exports = getEvents;
