const db = require('../db');

const deleteUserResolver = (_, args) => {
    const { id } = args;

    db.users = db.users.filter((user) => user.id !== id);

    return true;
  }

module.exports = deleteUserResolver;