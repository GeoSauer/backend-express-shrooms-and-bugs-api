const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { mushrooms } = require('../lib/mushrooms-data.js');
const { millipedes } = require('../lib/millipedes-data.js');

describe('mushroom routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/mushrooms should return a list of mushrooms', async () => {
    const res = await request(app).get('/mushrooms');
    const expected = mushrooms.map((mushroom) => {
      return { id: mushroom.id, commonName: mushroom.common_name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/mushrooms/:id should return details on a particular mushroom', async () => {
    const res = await request(app).get('/mushrooms/1');
    const veiledLady = {
      id: '1',
      commonName: 'Veiled Lady',
      binomialName: 'Phallus indusiatus',
      url: 'https://en.wikipedia.org/wiki/Phallus_indusiatus#/media/File:Phallus_indusiatus_02.JPG',
      scientificOrder: 'Phallales',
      edible: true,
    };
    expect(res.body).toEqual(veiledLady);
  });
});

describe('millipede routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/millipedes should return a list of millipedes', async () => {
    const res = await request(app).get('/millipedes');
    const expected = millipedes.map((millipede) => {
      return { id: millipede.id, commonName: millipede.common_name };
    });
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
