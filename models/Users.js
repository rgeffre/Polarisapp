//Configuring model/schema for user collection
const mongoose = require("mongoose");

//Define the schema
const UsersSchema = new mongoose.Schema({
  sub: { type: String, unique: true },
  email: { type: String, unique: true },
  name: "String",
  address: "String",
  city: "String",
  state: "String",
  zipCode: "Number",
  phoneNumber: "String"
});

module.exports = mongoose.model("Users", UsersSchema);
