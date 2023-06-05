const { faker } = require('@faker-js/faker');

exports.seed = async function(knex) {
  await knex('user').insert(
    { name: faker.person.fullName() },
  );

  // insert 5 random posts with this user_id
};
