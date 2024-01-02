const Event = require("../../schemas/event");

const createEvent = async (req, res) => {
  const { title, timeStart, timeEnd } = req.body;
  const event = new Event({ title, timeStart, timeEnd });
  await event.save();
  res.json(event);
};

module.exports = createEvent;
