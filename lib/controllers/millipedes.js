const { Router } = require('express');
const Millipede = require('../models/Millipede.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const millipede = await Millipede.getById(req.params.id);
    res.json(millipede);
  })
  .get('/', async (req, res) => {
    const millipedes = await Millipede.getAll();
    const filtered = millipedes.map(({ id, commonName }) => ({
      id,
      commonName,
    }));
    res.json(filtered);
  });
