const mongodb = require('mongodb');

const uri = process.env.MONGODB_URI;

const dataService = {
  getMenu: async () => {
    const db = await mongodb.MongoClient.connect(uri);
    const collection = db.db('heroku_sp1168cp').collection('menu');
    return collection.find({}).toArray();
  },
  insertOrder: async order => {
    const db = await mongodb.MongoClient.connect(uri);
    const collection = db.db('heroku_sp1168cp').collection('orders');
    await collection.insertOne(order);
    return order;
  },
};

module.exports = dataService;
