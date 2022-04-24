var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini message board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New message" });
});

router.post("/new", function (req, res, next) {
  console.log(req.body);
  const user = req.body.author;
  const text = req.body.message;
  const added = new Date();
  const message = { user, text, added };
  messages.unshift(message);
  res.redirect("/");
});

module.exports = router;
