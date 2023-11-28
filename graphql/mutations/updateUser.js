const db = require('../db');

const { 
    GraphQLString,
    GraphQLNonNull,
} = require('graphql');
const UserType = require('../types/userType');
const updateUserResolver = require('../resolvers/updateUserResolver');


const updateUser = {
    type: UserType,
    args: {
      email: {
        type: new GraphQLNonNull(GraphQLString),
      },
      name: {
        type: new GraphQLNonNull(GraphQLString),
      },
      password: {
        type: new GraphQLNonNull(GraphQLString),
      }
    },
    resolve: updateUserResolver,
}

module.exports = updateUser;