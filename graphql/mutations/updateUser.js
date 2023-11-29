const db = require('../db');

const { 
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
} = require('graphql');
const UserType = require('../types/userType');
const updateUserResolver = require('../resolvers/updateUserResolver');
const userInputType = require('../types/userInputType');


const updateUser = {
    type: UserType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      user: {
        type: userInputType,
      },
    },
    resolve: updateUserResolver,
}

module.exports = updateUser;