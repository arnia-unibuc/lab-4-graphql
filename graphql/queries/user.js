const db = require('../../models');

const { 
    GraphQLNonNull,
    GraphQLID,
    GraphQLList
} = require('graphql');



const UserType = require('../types/userType');

const userQuery = {
    type: UserType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      }
    },
    resolve: (_, args) => {
      const { id } = args;
      return db.User.findByPk(id);
    }
}

module.exports = userQuery;