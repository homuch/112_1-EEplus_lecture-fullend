const Event = require("./schemas/event");
const events = require("./eventDetails.json");
const initializeEvents = async () => {
  await Event.deleteMany();
  await Event.insertMany(
    events.map(({ title, timeStart, timeEnd }) => ({
      title,
      timeStart,
      timeEnd,
    }))
  );
};

module.exports = initializeEvents;
