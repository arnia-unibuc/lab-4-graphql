const db = require('../db');

const updateUserResolver = (_, args) => {
    const { id } = args;

    const userIndex = db.users.findIndex((user) => user.id === id);

    if(userIndex === -1) {
      return null;
    }

    db.users[userIndex] = {
      ...args,
    }

    return db.users[userIndex];
}

module.exports = updateUserResolver;