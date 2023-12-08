const express = require("express");
const router = express.Router();

router.get("/events", require("./getEvents"));
router.get("/eventDetails", require("./getEventDetails"));
router.post("/event", require("./createEvent"));
router.post("/join_event", require("./joinEvent"));

module.exports = router;
