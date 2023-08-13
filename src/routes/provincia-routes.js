const express = require('express')
const provinciaController = require('../controllers/provincia-controller')

const router = express.Router()

router.get("/obtener-todos", libreriaController.getAll)
router.get("/obtener-por-id/:id", libreriaController.getById)

module.exports = router