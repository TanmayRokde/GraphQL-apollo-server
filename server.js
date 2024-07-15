const express = require('express');
const { buildSchema } = require('graphql');
// const { graphqlHTTP } = require('express-graphql');
const {ApolloServer}=require('apollo-server-express')
const { makeExecutableSchema } = require('@graphql-tools/schema');
const {loadFilesSync}= require('@graphql-tools/load-files')




const resolversArray = loadFilesSync('**/*', {
  extensions: ['resolver.js'],
});

const typesArray = loadFilesSync('**/*', {
  extensions: ['graphql'],
});


async function startApolloServer() {
  const app = express();
  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
    
  })
  const server = new ApolloServer({
    schema
  });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' })

  app.listen(5001, () => {
    console.log('listening to port 5001..');
});

}
startApolloServer();

// const schema = makeExecutableSchema({
//     typeDefs: typesArray,
//     resolvers:resolversArray
// })

// Define the root resolver
const root = {
    products: require('./products/products.model'),
    orders: require('./orders/orders.model')
};

// app.use('/graphql', graphqlHTTP({
//     schema: schema,
//     graphiql: true, // Enable GraphiQL for testing queries
// }));

// app.listen(5001, () => {
//     console.log('listening to port 5001..');
// });
