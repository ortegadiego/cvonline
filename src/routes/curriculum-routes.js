const express = require('express')
const curriculumController = require('../controllers/curriculum-controller')

const router = express.Router()

router.get("/obtener-todos", curriculumController.getAll)
router.get("/obtener-por-id/:id", curriculumController.getById)
router.get("/elimimar-por-id/:id", curriculumController.deleteById)
router.get("/guardar", curriculumController.save)

module.exports = router