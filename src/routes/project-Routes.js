const express = require("express");
const { createProject, getAllProjects, getOneProject } = require("../controllers/project-controller");
const router = express.Router();

router.post('/',createProject)
router.get('/:ownerId',getAllProjects)
router.get('/:ownerId/:id',getOneProject)

module.exports = router;