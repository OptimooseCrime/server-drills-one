const CONFIG = require('./knexfile')[process.env.NODE_ENV || 'development']
module.exports = require('knex')(CONFIG);
// module.export = knex
// knex.migrate.latest([CONFIG])
