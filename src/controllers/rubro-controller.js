const provinciaService = require('../services/rubro-service')

async function getAll(req, res) {

  const rubros = await rubroService.getAll()

  res.status(200).send(rubros)
}

async function getById(req, res, next) {
  const { id } = req.params;

  try {
    const rubro = await rubroService.getById(id)

    res.status(200).send(rubro)
  } catch(error) {
    next(error)
  }
}

module.exports = { getAll, getById }