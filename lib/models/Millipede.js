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

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * from millipedes WHERE id = $1',
      [id]
    );
    return new Millipede(rows[0]);
  }
};
