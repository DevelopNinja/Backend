const express = require("express");
const router = express.Router();
const AI_controller = require("../controllers/AI_CNRTL");

router.get("/Info",AI_controller.Get_AI);

module.exports = router;