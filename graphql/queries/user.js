const db = require('../db');

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
      return db.users.find(user => user.id === parseInt(id));
    }
}

module.exports = userQuery;