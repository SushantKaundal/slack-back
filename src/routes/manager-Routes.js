const express = require("express");
const { createManager, getAllManagers,loginManager, Statustoggle } = require("../controllers/manager-controller");
const {validateManagerInput,validateMangerLogin} = require("../middlewares/manager-middleware");
const router = express.Router();

router.post('/create', validateManagerInput ,createManager)
router.get('/:ownerId',getAllManagers)
router.post('/login',validateMangerLogin,loginManager)
router.post('/status/:id',Statustoggle)


module.exports = router;