const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:password@localhost:5432/Canada_Amazon',
    migrations: {
      directory:__dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    }
  }
};