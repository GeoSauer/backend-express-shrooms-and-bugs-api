const pool = require('../utils/pool.js');
module.exports = class Millipede {
  constructor(row) {
    this.id = row.id;
    this.commonName = row.common_name;
    this.binomialName = row.binomial_name;
    this.url = row.url;
    this.scientificOrder = row.scientific_order;
    this.edible = row.edible;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from millipedes');
    return rows.map((millipedeRow) => new Millipede(millipedeRow));
  }
};
