const { Router } = require('express');
const Millipede = require('../models/Millipede.js');

module.exports = Router().get('/', async (req, res) => {
  const millipedes = await Millipede.getAll();
  const filtered = millipedes.map(({ id, commonName }) => ({ id, commonName }));
  res.json(filtered);
});
