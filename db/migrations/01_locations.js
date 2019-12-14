exports.up = function(knex) {
  return knex.schema.createTable("locations", function(table) {
    table.increments();
    table.string("address").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("locations");
};
