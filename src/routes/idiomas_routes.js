const express= require('express')
const idiomaControllers = require('../controllers/idiomas-controllers')
const {isAuthenticated} = require('../middlewares/authentication')
const router = express.Router()

router.get('/obtener-todos', idiomaControllers.getAllIdiomas)
router.get('/obtener-por-id/:id',idiomaControllers.getById)
router.post('/crear-idioma', idiomaControllers.createIdioma)
router.put('/editar-idioma/:id',idiomaControllers.editIdioma)
// router.delete('/borrar/:id',bookControllers.deleteBook)


module.exports = router