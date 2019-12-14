const knex = require("../db/knex");

exports.getAllLocations = function(req, res) {
  knex("locations").then(location => res.json(location));
};

exports.getOneLocation = function(req, res) {
  knex("locations")
    .where("id", req.params.id)
    .then(location => res.json(location));
};

exports.addOneLocation = function(req, res) {
  knex("locations")
    .insert({ location: req.body.location })
    .returning("*")
    .then(newLocation => {
      for (let i = 0; i < req.body.locations.length; i++) {
        knex("booklocations")
          .insert({
            book_id: newLocation[0].id,
            location_id: req.body.locations[i]
          })
          .returning("*")
          .then();
      }
    })
    .then(newLocation => res.json(newLocation));
};

exports.updateOneLocation = function(req, res) {
  knex("locations")
    .update({
      ...req.body
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedLocation => res.json(updatedLocation));
};

exports.removeOneLocation = function(req, res) {
  knex("booklocation")
    .del()
    .where("location_id", req.params.id)
    .returning("*")
    .then(
      knex("locations")
        .del()
        .where("id", req.params.id)
        .returning("*")
        .then(removedLocation => res.json(removedLocation))
    );
};
