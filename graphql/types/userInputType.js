const { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } = require('graphql');

const userInputType = new GraphQLInputObjectType({
    name: "UserInputType",
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        email: {
            type: new GraphQLNonNull(GraphQLString),
        },
        password: {
            type: new GraphQLNonNull(GraphQLString),
        }
    }
});

module.exports = userInputType;