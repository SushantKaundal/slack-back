const express = require("express")
const router = express.Router();
const adminRoutes = require("./admin-Routes")
const ownerRoutes = require("./owner-Routes.js")
const projectRoutes = require("./project-Routes.js")
const managerRoutes = require("./manager-Routes.js")


router.use("/admin",adminRoutes)
router.use("/owner",ownerRoutes)
router.use("/manager",managerRoutes)
router.use("/project",projectRoutes)

module.exports=router