const Event = require("../../schemas/event");

const postComment = async (req, res) => {
  const { eventId, content, userName } = req.body;
  const event = await Event.findById(eventId);
  event.comments_user.push(userName);
  event.comments_text.push(content);
  await event.save();
  res.json({ userName, content });
};

module.exports = postComment;
