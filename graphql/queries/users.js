const { 
    GraphQLList
} = require('graphql');

const UserType = require('../types/userType');

const db = require('../db');

const usersQuery = {
    type: new GraphQLList(UserType),
    resolve: () => {
      return db.users;
    },
}

module.exports = usersQuery;
