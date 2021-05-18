const Sequelize = require('sequelize');

const connection = new Sequelize('suporte102019', 'postgres', 'i745@postgres', {
    host: '192.168.10.45',
    dialect: 'postgres',
    timezone: '-03:00'
});

module.exports = connection;