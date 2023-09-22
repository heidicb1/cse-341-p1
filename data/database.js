// import library that helps read our connection string in when we're not in the production enviornment
const dotenv = require('dotenv');
dotenv.config();

// Import mongo client
const MongoClient = require('mongodb').MongoClient;

// Declare variable for database
let database;

const initDb = (callback) => {
    // If the database is set up
    if (database) {
        // Then pronounce our initialize and return
        console.log('Db is already initialized!');
        return callbackk(null, database);
    }
    // Otherwise call Mongodb connect and use the MONGODB_URL
    MongoClient.connect(process.env.MONGODB_URL)
        // If that is successful set the client that is returned from Mongo to the database variable
        .then((client) => {
            database = client;
            callback(null, database);
        })
        // Otherwise return err
        .catch((err) => {
            callback(err);
        })
};

const getDatabase = () => {
    // If the database is NOT set up
    if (!database) {
        // Then throw an error
        throw Error('Database is not initialized')
    }
    // Otherwise return database
    return database
};

//Export functions
module.exports = {
    initDb,
    getDatabase
};
