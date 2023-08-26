const {Idioma} = require ('../models/idioma')

async function getAllIdiomas(){
    const idiomas = await Idioma.findAll()
    return idiomas 

}

async function getById(id){
    const idioma = await Idioma.findByPk(id)
    if(!idioma){
        throw new Error ('No se encontro el idioma solicitado')
    }
    return idioma

}

async function createIdioma(nombre, nivel){
    const newIdioma = new Idioma()

    newIdioma.nombre=nombre
    newIdioma.nivel= nivel
    
    const idiomacreated = await newIdioma.save()
    return (idiomacreated)
}

async function editIdioma(id, nombre,nivel){
    const idioma = await getById(id)
    
    if(nombre){
        idioma.nombre = nombre
    }
    if(nivel){
        idioma.nivel = nivel
    }

    const idiomaCreated = await idioma.save()
    return idiomaCreated

}
module.exports = {getAllIdiomas, getById, createIdioma, editIdioma}