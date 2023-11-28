

const { 
    GraphQLObjectType, 
} = require('graphql');

const createUser = require('./mutations/createUser');
const updateUser = require('./mutations/updateUser');
const deleteUser = require('./mutations/deleteUser');
const login = require('./mutations/login');

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createUser: createUser,
      updateUser: updateUser,
      deleteUser: deleteUser,
      login: login,
    }
  })

module.exports = mutationType;