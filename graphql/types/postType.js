const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLID,
} = require('graphql');

const UserType = require('./userType');

const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: {
      id: {
        type: GraphQLID,
        resolve: (source) => {
            return source.id
        }
      },
      user: {
        type: UserType,
        resolve: (post) => {
            return post.getUser();
        }
      },
      title: {
        type: GraphQLString,
      },
      body: {
        type: GraphQLString,
      },
      createdAt: {
        type: GraphQLString,
      },
      updatedAt: {
        type: GraphQLString,
      }
    }
});

module.exports = PostType;