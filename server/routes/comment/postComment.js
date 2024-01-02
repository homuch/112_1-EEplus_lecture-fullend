const Event = require("../../schemas/event");
const Comment = require("../../schemas/comment");
const postComment = async (req, res) => {
  const { eventId, content, userId } = req.body;
  console.log(eventId, content, userId);
  const event = await Event.findById(eventId);
  if (!event) {
    return res.status(404).json({ error: "Event not found" });
  }
  const comment = new Comment({ user: userId, event: eventId, content });
  await comment.save();
  event.comments.push(comment);
  await event.save();
  res.json(comment);
};

module.exports = postComment;
