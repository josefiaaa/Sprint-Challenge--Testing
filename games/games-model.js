const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    add,
};

function find() {
    return db('games');
}

function findById(id) {
    return db('cars')
      .where({ id })
      .first();
}

function add(game) {
    return db('games')
      .insert(game, 'id')
      .then(([id]) => {
        return findById(id);
    });
}
