const express= require('express')
const direccionesControllers = require('../controllers/direcciones-controllers')

const {isAuthenticated} = require('../middlewares/authentication')
const router = express.Router()

router.get('/obtener-todos', direccionesControllers.getAllDirecciones)
router.get('/obtener-por-id/:id',direccionesControllers.getDireccionesById)
router.post('/crear-direcciones', direccionesControllers.crearDireccion)
router.put('/editar-direcciones/:id',direccionesControllers.editDireccion)
// router.delete('/borrar/:id',bookControllers.deleteBook)


module.exports = router