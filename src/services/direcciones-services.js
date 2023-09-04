const {Direccion} = require ('../models/direcciones')

async function getAllDirecciones (){
    const listadirecciones = await Direccion.findAll()
    return listadirecciones
}

async function getDireccionesById(id){
    const direccion =await Direccion.findByPk(id)

    if(!direccion){
        throw new Error("No existe la direccion con el id ")
    }

    return direccion
}

async function crearDireccion(calle, numero, prvId, locId){
    const nuevaDireccion = new Direccion()

    nuevaDireccion.calle= calle
    nuevaDireccion.numero= numero
    nuevaDireccion.prvId = prvId
    nuevaDireccion.locId = locId

    const direccionCreada = nuevaDireccion.save()
    return direccionCreada
}

async function editDireccion(id, calle, numero, prvId, locId){
    const direccionId = await getDireccionesById(id)

    if(calle){
        direccionId.calle = calle
    }
    if(numero){
        direccionId.numero = numero
    }
    if(prvId){
        direccionId.prvId= prvId
    }
    if(locId){
        direccionId.locId = locId
    }

    const direccionEdited = await direccionId.save()
    return direccionEdited

}

module.exports = {getAllDirecciones, getDireccionesById, crearDireccion, editDireccion}