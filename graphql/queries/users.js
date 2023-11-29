const { 
    GraphQLList
} = require('graphql');

const db = require('../../models');

const UserType = require('../types/userType');



const usersQuery = {
    type: new GraphQLList(UserType),
    resolve: () => {
      return db.User.findAll();
    },
}

module.exports = usersQuery;
