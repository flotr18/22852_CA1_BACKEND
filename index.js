/*
Properties of our collection :

Database : Users
Collection : infos

User = {
    name : name of the user | String
    familyname : familyname of the user | String
    age : age of the user | Int32
    real : Reality of the user ( if the user is real or not ) | Boolean
}

Example :

    name : 'Steve',
    familyname : 'Rogers',
    age : 102,
    real : false


Example 2 :

    name : 'George',
    familyname : 'Washington',
    age : 67,
    real : true

 */

const express = require('express') // Version 4.17.1
const app = express()
const { MongoClient, ObjectId } = require("mongodb"); // Version 3.6.3
const bodyParser = require('body-parser') // 1.19.3

const url = "mongodb+srv://admin:root@cluster0.elh7n.mongodb.net/test?retryWrites=true&w=majority"; // The link to our database
const client = new MongoClient(url, { useUnifiedTopology: true });
const port = 3000; // App Port

const dbName = "users"; // The name of our database



app.use(bodyParser.urlencoded({ extended: false}))

let db, userDb;

run().catch(console.dir);

// Main Page GET REQUEST
app.get('/', (req, res) => {
    res.send('Hello There ! ')
    console.log('Make some CRUD operations with GET,PUT,POST,DELETE Requests');

   try { // find is a mongoDB's method used to find all documents from a collection
       userDb.find({}).toArray(function(err, result) { // Display all documents in the console
           console.log(result);
       })

   }
   catch (e){ // If error, display on console
        console.log(e)
   }

});


// User Page GET REQUEST
app.get('/user', (req, res) => {
    console.log('GET Request on user route OK !');

    async function findUser() { // Find an user with GET Request

        // findOne is a mongoDB's method used to find an document with a clause
        const foundUser = await  userDb.findOne({familyname : 'Kane'}) // Find a user which has the familyname as Bond
        res.json(foundUser) // return the result as JSON format

    };

    findUser();
})

app.post('/user', (req, res) =>{
    try {
        console.log('POST Request on user route OK !');
        let user = new User(req.body.name.toString(), req.body.familyname.toString(), parseInt(req.body.age), (/true/i).test(req.body.real))
        // Create a new User to insert in the database
        userDb.insertOne(user) // insertOne is a mongoDB's method used to insert a document to the database
        res.sendStatus(200);
        
    }
    catch (e) {
        console.log(e)
        
    }
    

})


app.put('/user', (req, res) => {
    console.log('PUT Request on user route OK !');
    async function findUser() {
        try{
            const foundUser = await  userDb.findOne({"_id": ObjectId(req.body.id)}) // Retrieve a document from its ID
            if(foundUser !== null){ // If the found document is different from null, Set a new User
                let user = new User(
                    foundUser.name,
                    foundUser.familyname,
                    foundUser.age,
                    foundUser.real
                    )
                user.name = req.body.name
                user.familyname = req.body.familyname
                user.age = parseInt(req.body.age) // To Int32
                user.real = (/true/i).test(req.body.real) // To Boolean


                try{
                    const updateResult = await userDb.updateOne( // UpdateOne is a MongoDB's method used to update a single document
                        {"_id": ObjectId(req.body.id)}, // Update the document which is matching the ID specified in the request
                        {$set:user}) // Set the new values for the updated document
                } catch(err){
                    console.log(err.stack)
                }
                res.send("User UPDATED");
            } else {
                res.send("User NOT UPDATED");
            }}catch(e){
            res.send("Unknown or Invalid ID's object")
        }
    };
    findUser()


})
app.delete('/user', (req, res) =>{

    try {
        console.log('DELETE Request on user route OK !');

        console.log(req.body.id) // Display Deleted ID's document

        userDb.deleteOne({"_id": ObjectId(req.body.id)}) // DeleteOne is a MongoDB's method used to delete a single document
        async function findUser() {
            const foundUser = await  userDb.findOne({"_id": ObjectId(req.body.id)}) // Delete the document which is matching the ID specified in the request
            if(foundUser !== null){ // Is the found user is not null
                res.send("User NOT DELETED")
            }
            res.send("User DELETED")

        }
        findUser();



    }
    catch (e) {
        console.log(e)

    }



})

async function run() {
    try {
        await client.connect(); // Connect to MongoDB Database

        db = client.db(dbName); // Specify the database used for our CRUD App

        userDb = db.collection("infos"); // Specify the collection used for our CRUD APP

        app.listen(port); // Server App Server which is set to 3000

        console.log('Node Server Launched')
        console.log('Connected to MongoDB!')
        console.log(`Node CRUD App listening at http://localhost:${port}`)

    } catch (err) {
        console.log(err.stack);
    }
}
class User {
    constructor(name, familyname, age, real){
        this.name = name; // name of the user
        this.familyname = familyname; // family of the user
        this.age = age; // age of the user
        this.real = real; // reality of the user
    }

}