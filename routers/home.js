const express = require("express");
const router = express.Router();

const homeRouter = (req, res) => res.send("home");

router.get("/", homeRouter);

module.exports = router;
