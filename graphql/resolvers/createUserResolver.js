const db = require('../../models');

const createUserResolver = async (_, { user }) => {
    const { name, email, password } = user;
    const newUser = await db.User.create({
      name,
      email,
      password
    });
  
    return newUser;
}

module.exports = createUserResolver;