const express = require('express')
const localidadController = require('../controllers/localidad-controller')

const router = express.Router()

router.get("/obtener-por-provincia-id/:id", localidadController.getAllByProvincia)
router.get("/obtener-por-id/:id", localidadController.getById)

module.exports = router