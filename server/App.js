const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.connect('mongodb+srv://admin:admin123@cluster0.p6ob5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connection.once('open',() =>{
  console.log("connected to database");
})
// bind express with graphql
app.use('/graphql', graphqlHTTP({
    // pass in a schema property
    schema,
    graphiql: true
}));

app.listen(8080, () => {
    console.log('now listening for requests on port 4000');
});
