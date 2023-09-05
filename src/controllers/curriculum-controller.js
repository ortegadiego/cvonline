const curriculumService = require('../services/curriculum-service')


async function getAll(req, res) {

  const cvs = await curriculumService.getAll()

  res.status(200).send(cvs)
}

async function getById(req, res, next) {
  const { id } = req.params;

  try {
    const cv = await curriculumService.getById(id)

    res.status(200).send(cv)
  } catch(error) {
    next(error)
  }
}

async function save(req, res, next) {
  try{  
    const { descripcion, nombre, apellido, telefono, correo, rubroId } = req.body;
    const cv = await curriculumService.save(descripcion, nombre, apellido, correo, telefono, rubroId)
    res.status(201).send(cv)
  } catch(error){
    console.log(error.message)
    console.log(error)
    next(error)
  }
}

async function deleteById(req, res) {
  const { id } = req.params

  await curriculumService.erase(id)

  res.status(200).send(`Curriculum con el id ${id} ha sido eliminado exitosamente!`)
}


module.exports = { getAll, getById, deleteById, save }