var express = require("express");
var router = express.Router();
const pusherController = require("../controllers/Pusher.controller");
const ServiceWorker = require("../service-worker");
/* GET home page. */

router.get("/", pusherController.index);
router.get("/about", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/service-worker", ServiceWorker.index);

module.exports = router;
