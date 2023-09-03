const express = require('express')
const rubroController = require('../controllers/rubro-controller')

const router = express.Router()

router.get("/obtener-todos", rubroController.getAll)
router.get("/obtener-por-id/:id", rubroController.getById)

module.exports = router