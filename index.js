const express = require("express");
const { MongoClient } = require("mongodb");

const PORT = 3000;
const HOST = "0.0.0.0";
const url = "mongodb://root:example@mongo:27017/";
const dbName = "myProject";

const app = express();

const client = new MongoClient(url);
async function db() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("documents");
  return "done.";
}
db()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

app.get("/", (req, res) => {  
  res.send("Hello World");
});

app.listen(PORT, HOST);
