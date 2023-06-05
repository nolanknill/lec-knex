const usersData = [
  {
    id: 1,
    name: "Estefania"
  },
  {
    id: 2,
    name: "Thomas"
  }
]

const postsData = [
  {
    id: 1,
    title: "Life is good",
    content: "Knex is so very cool",
    user_id: 1
  },
  {
    id: 2,
    title: "Life is not good",
    content: "The Yin to the other poster's Yang",
    user_id: 2
  },
  {
    id: 3,
    title: "Stay encouraged",
    content: "Seriously, stay encouraged and motivated, but also organized. You can do this!",
    user_id: 2
  }
]

exports.seed = async function(knex) {
  await knex('post').del();
  await knex('user').del();

  await knex('user').insert(usersData);
  await knex('post').insert(postsData);
};
