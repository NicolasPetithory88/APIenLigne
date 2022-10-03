const knex = require('./knex');

function createUser(user) {
    return knex('users').insert(user);
};

function getAllUsers() {
    return knex('users').select('*');
};
       

function deleteUser(id) {
    return knex('users').where('id', id).del();
};

function updateUser(id, user) {
    return knex('users').where('id', id).update(user);
};

function getUser(id) {
    return knex('users').where('id', id).select('*');
};


module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
    getUser
}