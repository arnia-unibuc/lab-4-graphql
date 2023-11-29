const db = require('../../models');

const updateUserResolver = async (_, args) => {
    const { id, user } = args;

    const targetUser = await db.User.findByPk(id);

    if(!targetUser) {
      return null;
    }

    const updatedUser = await targetUser.update({
      ...user,
    });

    return updatedUser;
}

module.exports = updateUserResolver;