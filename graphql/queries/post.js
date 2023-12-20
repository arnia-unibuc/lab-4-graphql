const db = require('../../models');

const { 
    GraphQLNonNull,
    GraphQLID,
} = require('graphql');

const PostType = require('../types/postType');

const postQuery = {
    type: PostType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      }
    },
    resolve: async (_, args) => {
      const { id } = args;
      return db.Post.findByPk(id);
    }
}

module.exports = postQuery;