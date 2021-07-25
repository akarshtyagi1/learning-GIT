const { MongoClient } = require("mongodb");

// Connection URI
const uri =
    "mongodb+srv://root:admin /?poolSize=20&writeConcern=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
    try {
        // Connect the client to the server
        await client.connect();

        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
    console.log(" hello dear");
    var a = "I am learning git";
    console.log(a);
}
run().catch(console.dir);
