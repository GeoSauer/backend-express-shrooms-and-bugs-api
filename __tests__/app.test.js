const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { mushrooms } = require('../lib/mushrooms-data.js');

describe('mushroom routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/mushrooms should return a list of mushrooms', async () => {
    const res = await request(app).get('/mushrooms');
    const expected = mushrooms.map((mushroom) => {
      return { id: mushroom.id, name: mushroom.commonName };
    });
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
