const { MongoClient, Db } = require("mongodb");
const cors = require("cors");
const bodyparser = require("body-parser");
const isEmpty = require("lodash.isempty");

const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://kschilweri28:K28chill@backend.th7zgp2.mongodb.net/?retryWrites=true&w=majority&appName=backend";

const client = new MongoClient(mongoURI);

mongoose
  .connect(mongoURI)
  .then(() => console.log("connected to database successfully"))
  .catch((error) => console.log(error.message));

const express = require("express");
const app = express();
const port = 3000;
app.use(bodyparser.json());
app.use(cors());

var uuid = "";
var email = "";



//route to register a new user
app.post("/registering_user", async (req, res) => {
  let success = false
  if (isEmpty(req.body)) {
    res.status(500).json("Failed to create account: Request is empty");
  } else {
    //admin access needed to create a new database instead of collection
    const admin = client.db().admin();
    const dbInfo = await admin.listDatabases();

    //lists databases according to name in array. everytime function runs, dbName is redeclared to clear it of prev data
    const dbNames = [];
    for (i = 0; i < dbInfo.databases.length; i++) {
      dbNames.push(dbInfo.databases[i].name);
    }

    if (dbNames.includes(req.body.email)) {
      res.json({message:"Failed to create account: User with this email already exists"});
    } else {
      try {
        const db = client.db(req.body.email);
        const collection = db.collection("user_details");

        await mongoose.connection
          .createCollection("user_details")
          .then(await collection.insertOne(req.body));
          success=true;
          uuid = req.body.uuid;
          email = req.body.email;
        res.json({success,uuid:uuid,email:email,message:"User successfully created, please login"});

      } catch (error) {
        success=false;
        console.error(error.message);
        res.json({error:"Internal Server Error"});
      }
    }
  }
});

//route to login existing user
app.post("/login", async (req, res) => {
  let success=false;
  const admin = client.db().admin();
  const dbInfo = await admin.listDatabases();
  const dbNames = [];
  for (i = 0; i < dbInfo.databases.length; i++) {
    dbNames.push(dbInfo.databases[i].name);
  }
  if (dbNames.includes(req.body.email)) {
    const db = client.db(req.body.email);
    const collection = db.collection("user_details");
    const user_results = await collection.find({}).toArray();

    try {
      if (
        req.body.user_email === user_results[0].user_email &&
        req.body.password === user_results[0].password
      ) {
        email = req.body.email;
        uuid = user_results[0].uuid;
        success=true;
        res.json({success,uuid:uuid,email:email,message:"Login successful"});
      } else {
        success=false;
        res.json({success,message:"Invalid credentials"});
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json("Internal Server Error");
    }
  } else {
    res.json({success,message:"User does not exist, please register for a new account"});
  }
});

//route to save password
app.post(`/${uuid}/addpassword`, async (req, res) => {
  if (isEmpty(req.body)) {
    res.json({message:"Failed to save password: Request is empty"});
  } else {
    try {
      const password = req.body;
      const db = client.db(email);
      const collection = db.collection("passwords");
      await collection.insertOne(password);
      res.json({message:"Password saved successfully"});
    } catch (error) {
      console.error(error.message);
      res.status(500).json("Internal Server Error");
    }
  }
});

//route to delete password
app.delete("/", async (req, res) => {
  try {
    const query = { id: req.body.id };
    const db = client.db(email);
    const collection = db.collection("passwords");
    await collection.deleteOne(query);
    res.json("Password deleted successfully");
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
