const express = require("express");
const router = express.Router();
const Huni_controller = require("../controllers/Huni_CNTRL");

router.get("/Info",Huni_controller.Get_Huni);

module.exports = router;