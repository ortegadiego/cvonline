const localidadService = require('../services/localidad-service')

async function getAllByProvincia(req, res) {
  const { id } = req.params;
  const localidades = await localidadService.getAllByIdProvincia(id)

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

module.exports = { getAllByProvincia, getById}