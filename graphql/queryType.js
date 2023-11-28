const db = require('./db');

const { 
    GraphQLObjectType, 
    GraphQLList,
    GraphQLNonNull,
    GraphQLID,
} = require('graphql');


const userQuery = require('./queries/user');
const usersQuery = require('./queries/users');

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      users: usersQuery,
      user: userQuery,
    }
})

module.exports = queryType;