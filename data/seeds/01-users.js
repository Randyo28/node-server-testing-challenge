exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { user_name: 'Randy', user_age: 26 },
        { user_name: 'Nico', user_age: 4 },
        { user_name: 'Babo', user_age: 25 },
      ])
    })
}
