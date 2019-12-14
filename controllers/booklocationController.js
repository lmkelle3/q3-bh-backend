const knex = require("../db/knex");

exports.getAllBookLocations = function(req, res) {
  knex("booklocation").then(booklocation => res.json(booklocation));
};
