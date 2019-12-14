const knex = require("../db/knex");

exports.getAllBooks = function(req, res) {
  knex("books").then(books => res.json(books));
};

exports.getOneBook = function(req, res) {
  knex("books")
    .where("id", req.params.id)
    .then(books => res.json(books));
};

exports.addOneBook = function(req, res) {
  knex("books")
    .insert(req.body)
    .returning("*")
    .then(newBook => res.json(newBook));
};

exports.updateOneBook = function(req, res) {
  knex("books")
    .update({
      ...req.body
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedBook => res.json(updatedBook));
};

exports.removeOneBook = function(req, res) {
  knex("booklocation")
    .del()
    .where("book_id", req.params.id)
    .returning("*")
    .then(
      knex("books")
        .del()
        .where("id", req.params.id)
        .returning("*")
        .then(removedBook => res.json(removedBook))
    );
};
