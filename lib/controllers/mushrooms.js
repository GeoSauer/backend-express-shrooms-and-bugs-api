const { Router } = require('express');
const Mushroom = require('../models/Mushroom.js');

module.exports = Router().get('/', async (req, res) => {
  const mushrooms = await Mushroom.getAll();
  const filtered = mushrooms.map(({ id, name }) => ({
    id,
    name,
  }));
  res.json(filtered);
});
