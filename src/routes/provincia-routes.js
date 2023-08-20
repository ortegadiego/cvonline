const express = require('express')
const provinciaController = require('../controllers/provincia-controller')

const router = express.Router()

router.get("/obtener-todos", provinciaController.getAll)
router.get("/obtener-por-id/:id", provinciaController.getById)

module.exports = router