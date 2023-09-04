const direccionesServices = require('../services/direcciones-services')

async function getAllDirecciones(req,res){
    const getdirecciones = await direccionesServices.getAllDirecciones()
    res.status(200).send(getdirecciones)
}

async function getDireccionesById(req, res, next){
    const {id} = req.params
    try {
        const getDireccion = await direccionesServices.getDireccionesById(id)
        res.status(200).send(getDireccion)
    } catch (error) {
        next(error)
    }
}

async function crearDireccion(req,res){
const {calle, numero, prvId, locId} = req.body

const newdireccion = await direccionesServices.crearDireccion(calle, numero, prvId, locId)
res.status(200).send(newdireccion) 

}

async function editDireccion(req, res, next){
    const {id} = req.params
    const {calle, numero, prvId, locId} = req.body

    const direccionEdited = await direccionesServices.editDireccion(id, calle, numero, prvId, locId)
    res.status(200).send(direccionEdited)
}

module.exports = {getAllDirecciones, getDireccionesById, crearDireccion, editDireccion}