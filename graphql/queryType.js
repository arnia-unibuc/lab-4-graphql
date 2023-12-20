const db = require('./db');

const { 
    GraphQLObjectType, 
    GraphQLList,
    GraphQLNonNull,
    GraphQLID,
} = require('graphql');


const userQuery = require('./queries/user');
const usersQuery = require('./queries/users');
const postQuery = require('./queries/post');

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      users: usersQuery,
      user: userQuery,
      post: postQuery,
    }
})

module.exports = queryType;