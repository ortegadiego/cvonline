const provinciaService = require('../services/provincia-service')
const localidadService = require('../services/localidad-service')

async function getAll(req, res) {

  const provincias = await provinciaService.getAll()

  res.status(200).send(provincias)
}

async function getById(req, res, next) {
  const { id } = req.params;

  try {
    const provincia = await provinciaService.getById(id)

    res.status(200).send(provincia)
  } catch(error) {
    next(error)
  }
}

module.exports = { getAll, getById }