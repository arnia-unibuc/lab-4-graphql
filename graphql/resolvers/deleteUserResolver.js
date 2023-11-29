const db = require('../../models');

const deleteUserResolver = async (_, args) => {
    const { id } = args;

    const targetUser = await db.User.findByPk(id);

    if(!targetUser) {
      return null;
    }

    try {
      await targetUser.destroy();

      return true;
    } catch (e) {
      throw new Error(e);
    }
  }

module.exports = deleteUserResolver;