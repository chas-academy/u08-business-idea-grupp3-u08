const { MongoClient, Collection } = require('mongodb');

async function main() {

  const uri = "mongodb+srv://chatlabsTeam:nospamarenointhechaterino@charlabs.icuqwds.mongodb.net/?retryWrites=true&w=majority";//Connection URI

  const client = new MongoClient(uri);//make new connection

  try {
    await client.connect();//try to connect to mongoDB

    // await listDatabases(client)// make the DB call
    await createListing(client,
      {
        name: "testman",
        story: "a man that is a test!",
        Race: "human",
        traits: "drunkard"
      })
  } catch (e) {//error handling 
    console.log(e);//error handling 
  } finally {
    await client.close();//error handling 

  }

}

async function listDatabases(client) {
  databaseList = await client.db().admin().listDatabases();// list all databases
  console.log("Databases:"); // add the string "Databases: to the top
  databaseList.databases.forEach(db => console.log(` - ${db.name}`)); //console log the database name for each database
}



async function createListing(client, newListing) {
  const res = await client.db("Chatlabs").collection("characters").insertOne(newListing);
  console.log(`new listiting added with id of ${res.insertedId}`);
}
main().catch(console.error) //error handling 

