const express = require("express");
const { createOwner, loginOwner } = require("../controllers/user-controller");
const router = express.Router();

router.post('/create',createOwner)
router.post('/login',loginOwner)



module.exports = router;