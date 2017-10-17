//Configuring model/schema for user collection
const mongoose = require('mongoose');

//Define the schema
const schema = new mongoose.Schema({
  safe: "Boolean",
  needs: {
    category: 'String',
    specifics: 'String'
  }
});

//module.exports = mongoose.model('User', schema);


