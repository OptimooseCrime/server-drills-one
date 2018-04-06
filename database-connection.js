const CONFIG = require('./knexfile')[process.env.NODE_ENV || 'development']
const knex = require ('knex')(CONFIG)
module.export = knex
knex.migrate.latest([CONFIG])
