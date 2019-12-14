exports.up = function(knex) {
  return knex.schema.createTable("booklocation", function(table) {
    table.increments();
    table
      .integer("book_id")
      .references("id")
      .inTable("books")
      .notNullable();
    table
      .integer("location_id")
      .references("id")
      .inTable("locations")
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("booklocation");
};
