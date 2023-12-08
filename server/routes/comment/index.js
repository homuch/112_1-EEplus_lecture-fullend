const express = require("express");
const router = express.Router();

router.post("/comment", require("./postComment"));

module.exports = router;
