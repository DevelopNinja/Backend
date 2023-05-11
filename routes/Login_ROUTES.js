const express = require("express");
const router = express.Router();
const OTHU_controller = require("../controllers/Login_CNTRL");

router.get("/Info",OTHU_controller.Get_Othu);
router.get("/Save",OTHU_controller.Save_Othu);
router.get("/Update",OTHU_controller.Update_Othu);
module.exports = router;