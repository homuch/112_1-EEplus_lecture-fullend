const Event = require("../../schemas/event");
const User = require("../../schemas/user");

const joinedEvent = async (req, res) => {
  const { eventId, userId, toStatus } = req.body;
  console.log(eventId, userId, toStatus);
  const user = await User.findById(userId);
  const event = await Event.findById(eventId);
  const newJoinedEvents = user.joinedEvents.filter(
    (eventObjId) => eventObjId.toString() !== eventId
  );
  const newAttendeesList = event.attendees.filter(
    (userObjId) => userObjId.toString() !== userId
  );
  if (toStatus) {
    newJoinedEvents.push(event);
    newAttendeesList.push(user);
  }
  await Promise.all([
    User.findByIdAndUpdate(userId, { joinedEvents: newJoinedEvents }),
    Event.findByIdAndUpdate(eventId, { attendees: newAttendeesList }),
  ]);
  res.json({ joinedEvents: newJoinedEvents });
};

module.exports = joinedEvent;
