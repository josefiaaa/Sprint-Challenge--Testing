
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', table => {
    table
        .increments();
    table
        .string('title', 200)
        .notNullable()
        .unique()
    table
        .string('genre', 100)
        .notNullable()
    table
        .integer('releseYear')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games');
};
