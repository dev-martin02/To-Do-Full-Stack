const express = require("express");
const router = express.Router();

const errorPage = (req, res) => res.send("Sorry we can't find this page 404");

router.use(errorPage);

module.exports = router;
