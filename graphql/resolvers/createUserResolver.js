const db = require('../db');

const createUserResolver = (_, args, { user }) => {
    if(!user.roles.includes('ADMIN')) {
        return null;
    }

    const newUser = {
      id: db.users.length + 1,
      ...args,
    }

    db.users.push(newUser);

    return newUser;
}

module.exports = createUserResolver;