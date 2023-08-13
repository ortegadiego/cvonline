const express = require('express')
const localidadController = require('../controllers/localidad-controller')

const router = express.Router()

router.get("/obtener-por-provincia-id/:id", libroController.getAllByIdProvincia)
router.get("/obtener-por-id/:id", libroController.getById)

module.exports = router