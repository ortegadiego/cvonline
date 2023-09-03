const idiomaServices = require('../services/idiomas-services')

async function getAllIdiomas (req,res){
    const listidiomas = await idiomaServices.getAllIdiomas()
    res.status(200).send(listidiomas)
}

async function getById(req, res, next){
    const {id}= req.params;
    try {
        const idioma = await idiomaServices.getById(id)
        res.status(200).send(idioma)
        
    } catch (error) {
        next(error)
    }
}

async function createIdioma(req, res){
    const {nombre, nivel} = req.body
    
    const newIdioma = await idiomaServices.createIdioma(nombre, nivel)
    res.status(200).send(newIdioma)
}

async function editIdioma(req, res, next){
    const {id} = req.params
    const{nombre, nivel} = req.body

    const idiomaEdited = await idiomaServices.editIdioma(id, nombre, nivel)
    res.status(200).send(idiomaEdited)

}

module.exports = {getAllIdiomas, getById, createIdioma, editIdioma}