const Event = require("../../schemas/event");

const getEvents = async (req, res) => {
  const { search, userId } = req.query;
  const events = await Event.find({ title: new RegExp(search) || /.*/ });
  // console.log(search, events);
  res.json(
    events.map(({ title, attendees, _id }) => ({
      title,
      id: _id,
      inInterests: attendees.length,
      joined: attendees.some((usrObjId) => usrObjId.toString() === userId),
    }))
  );
};

module.exports = getEvents;
