const pool = require('../utils/pool.js');
module.exports = class Mushroom {
  constructor(row) {
    this.id = row.id;
    this.commonName = row.common_name;
    this.binomialName = row.binomial_name;
    this.url = row.url;
    this.scientificOrder = row.scientific_order;
    this.edible = row.edible;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from mushrooms');
    return rows.map((mushroomRow) => new Mushroom(mushroomRow));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * from mushrooms WHERE id = $1', [
      id,
    ]);
    return new Mushroom(rows[0]);
  }
};
