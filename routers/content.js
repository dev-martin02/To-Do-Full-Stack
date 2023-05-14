const express = require("express");
const router = express.Router();

const contentRoute = (req, res) => res.send("content");

router.get("/", contentRoute);

module.exports = router;
