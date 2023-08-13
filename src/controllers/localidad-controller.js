const localidadService = require('../services/localidad-service')

async function getAll(req, res) {

  const localidades = await localidadService.getAll()

  res.status(200).send(localidades)
}

async function getById(req, res, next) {
  const { id } = req.params;

  try {
    const localidad = await localidadService.getById(id)

    res.status(200).send(localidad)
  } catch(error) {
    next(error)
  }
}

module.exports = { getAll, getById}