const { Curriculum } = require('../models/curriculum')

async function getAll() {
  const list = await Curriculum.findAll()
  return list
}

async function getById(id) {
  const curriculum = await Curriculum.findOne({
    where: {
      id: id
    }
  })
  
  if (curriculum == null) {
    throw new Error("CV no encontrado")
  }

  return curriculum
}

async function save(descripcion, nombre, apellido, correo, telefono, rubro) {
  const curriculum = new Curriculum()

  curriculum.descripcion = descripcion
  curriculum.nombre = nombre
  curriculum.apellido = apellido
  curriculum.correo = correo
  curriculum.telefono = telefono
  curriculum.rubro = rubro

  if (rubro){
    curriculum.rubro = rubro
  }

  const libroCreated = await libro.save()
  return libroCreated
}

async function deleteById(id) {
  const curriculum = await getById(id)
  curriculum.deleteById(id);
}

module.exports = { getAll, getById, deleteById, save }