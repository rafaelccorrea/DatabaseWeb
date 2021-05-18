const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '192.168.10.45',
    user : 'postgres',
    password : 'i745@postgres',
    database : 'suporte102019'
  }
});

module.exports = knex;