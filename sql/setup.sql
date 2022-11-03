-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS mushrooms;

CREATE TABLE mushrooms (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    common_name VARCHAR NOT NULL,
    binomial_name VARCHAR NOT NULL,
    url VARCHAR NOT NULL,
    scientific_order VARCHAR NOT NULL,
    edible BOOLEAN NOT NULL
);

INSERT INTO mushrooms (common_name, binomial_name, url, scientific_order, edible)
VALUES
('Veiled Lady', 'Phallus indusiatus', 'https://en.wikipedia.org/wiki/Phallus_indusiatus#/media/File:Phallus_indusiatus_02.JPG', 'Phallales', TRUE),
('Fly Agaric', 'Amanita muscaria', 'https://en.wikipedia.org/wiki/Amanita_muscaria#/media/File:Amanita_muscaria_3_vliegenzwammen_op_rij.jpg', 'Agaricales', TRUE),
('Destroying Angel', 'Amanita bisporigera', 'https://en.wikipedia.org/wiki/Amanita_bisporigera#/media/File:Amanita_bisporigera_17932.jpg', 'Agaricales', FALSE),
('Bleeding Tooth Fungus', 'Hydnellum peckii', 'https://en.wikipedia.org/wiki/Hydnellum_peckii#/media/File:Hydnellum_peckii2.jpg', 'Thelephorales', FALSE),
('Turkey Tail', 'Trametes versicolor', 'https://en.wikipedia.org/wiki/Trametes_versicolor#/media/File:Trametes_versicolor_G4_(1).JPG', 'Polyporales', TRUE),
('Orange Pore Fungus', 'Favolaschia calocera', 'https://en.wikipedia.org/wiki/Favolaschia_calocera#/media/File:Favolaschia_calocera_38204.jpg', 'Agaricales', FALSE);