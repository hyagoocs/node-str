const bluebird = require('bluebird');
const mongoose = require('mongoose');
mongoose.Promise = bluebird;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://crudseidor:crudseidor@crudseidor.zzlhq.mongodb.net/crudseidor?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

module.exports = { mongoose }