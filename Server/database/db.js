// const bcrypt = require('bcrypt');
const { encrypt, decrypt } = require("../bcrypt/privacy");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

// Connection to MongoDB
const connect = async (collection) => {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL);
    const coll = client.db("foodies").collection(collection);

    return { client, coll };
  } catch (error) {
    console.log(error);
  }
};

const readData = async (collection) => {
  try {
    const { client, coll } = await connect(collection);

    const data = await coll.find({}).toArray();
    await client.close();

    return data;
  } catch (error) {
    console.log(`${error} in readData()`);
  }
};

// For inserting user/data
const insert = async (userData, collection) => {
  // const client = await MongoClient.connect(process.env.MONGO_URL);
  // const coll = client.db('foodies').collection('users');

  const { client, coll } = await connect(collection);

  // Password Encryption
  userData.password = await encrypt(userData.password);
  // const newPass = await bcrypt.hash(userData.password, 4);
  // console.log(userData.password);
  // console.log(newPass);

  // Secret Answer encryption for forgot password
  userData.answer = await encrypt(userData.answer);
  // const newAns = await bcrypt.hash(userData.answer, 4);
  // console.log(userData.answer);
  // console.log(newAns);

  // updating password and answer
  // userData.password = newPass;
  // userData.answer = newAns;

  // New user entry
  await coll.insertOne(userData);
  await client.close();
};

// For deleting user/data
const remove = async (email) => {
  // const client = await MongoClient.connect(process.env.MONGO_URL);
  // const coll = client.db('foodies').collection('users');

  const { client, coll } = await connect();

  // Deleting user
  await coll.deleteOne({ email: email });
  await client.close();
};

// For Updating details
const update = async (data) => {
  const { client, coll } = await connect();

  // Updating user
  await coll.updateOne(
    { email: data.email },
    {
      $set: {
        name: data.name,
        branch: data.branch,
        question: data.question,
        answer: data.answer,
        registeredAs: data.registeredAs,
      },
    }
  );
  await client.close();
};

module.exports = { insert, remove, update, connect, readData };