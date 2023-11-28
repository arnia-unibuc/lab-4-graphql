const db = require('../db');

const { 
    GraphQLString,
    GraphQLNonNull,
} = require('graphql');
const UserType = require('../types/userType');
const createUserResolver = require('../resolvers/createUserResolver');

const createUser = {
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
    resolve: createUserResolver,
}

module.exports = createUser;