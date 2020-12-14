const RoomsQuery = require('./rooms/rooms.query');
const RoomsResolver = require('./rooms/rooms.resolver');

const resolvers = {
  Query: {
    ...RoomsQuery,
  },

  Mutation: {
    ...RoomsResolver,
  },

  // to relieve the error 
  // "Type ******  is missing a “__resolveType” resolver. Pass false into “resolverValidationOptions.requireResolversForResolveType” to disable this warning."
  MutationResponse: {
    __resolveType(mutationResponse, context, info){
      return null;
    },
  },
};

module.exports = resolvers;
