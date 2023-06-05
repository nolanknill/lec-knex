// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      database: 'lec_knex',
      user:     'root',
      password: 'rootroot',
      charset: "utf8"
  }
};
