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

  it('/mushrooms/:id should return details on a particular mushroom', async () => {
    const res = await request(app).get('/mushrooms/1');
    const veiledLady = {
      id: '1',
      common_name: 'Veiled Lady',
      binomial_name: 'Phallus indusiatus',
      url: 'https://en.wikipedia.org/wiki/Phallus_indusiatus#/media/File:Phallus_indusiatus_02.JPG',
      scientific_order: 'Phallales',
      edible: true,
    };
    expect(res.body).toEqual(veiledLady);
  });

  afterAll(() => {
    pool.end();
  });
});
