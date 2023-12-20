const { 
    GraphQLList
} = require('graphql');

const db = require('../../models');

const UserType = require('../types/userType');



const usersQuery = {
    type: new GraphQLList(UserType),
    resolve: (_, args, user) => {
      if(user.id === 1) {
        return db.User.findAll();
      }

      return [];3
    },
}

module.exports = usersQuery;
