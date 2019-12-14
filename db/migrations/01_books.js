exports.up = function(knex) {
  return knex.schema.createTable("books", function(table) {
    table.increments();
    table.string("title").notNullable();
    table.string("author").notNullable();
    table.string("description").notNullable();
    table.integer("location").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("books");
};
