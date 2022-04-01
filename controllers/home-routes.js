const { User, Message } = require("../models");

const router = require("express").Router();

// Landing page
router.get("/", (req, res) => {
  console.log("Testing");
  res.render("home", { message: "Hi there!" });
});

module.exports = router;
