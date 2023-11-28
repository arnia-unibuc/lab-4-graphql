const db = require('../db');

const { 
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLID,
} = require('graphql');

const deleteUserResolver = require('../resolvers/deleteUserResolver');

const deleteUser = {
    type: GraphQLBoolean,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      }
    },
    resolve: deleteUserResolver,
}

module.exports = deleteUser;
