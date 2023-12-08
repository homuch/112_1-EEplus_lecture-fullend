const Event = require("../../schemas/event");

const createEvent = async (req, res) => {
  const { title, dateStart, dateEnd } = req.body;
  const event = new Event({ title, dateStart, dateEnd });
  await event.save();
  res.json(event);
};


module.exports = createEvent;