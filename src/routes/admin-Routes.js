const express = require("express");
const { AdminLogin, AdminSignup } = require("../controllers/admin-controller");
const router = express.Router();

router.post("/login",AdminLogin);
router.post("/create",AdminSignup);

module.exports = router;
