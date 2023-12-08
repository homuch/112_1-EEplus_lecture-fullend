const express = require("express");
const router = express.Router();

router.use(require("./login"));
router.use(require("./event"));
router.use(require("./comment"));

module.exports = router;
