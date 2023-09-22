// Add this library that we just installed in the termail npm i express
const express = require('express');
const cors = require('cors');
//Interacts with MongoDB
const mongoose = require('mongoose');
// Require bodyParser
const bodyParser = require('body-parser');

//go to data directory first
const mongodb = require('./data/database');

// Main application
const app = express();



//Most cloud enviornments use this code to declare a port
const port = process.env.PORT || 3000;

//Swagger npm install --save-dev swagger-autogen
const swaggerAutogen = require('swagger-autogen')();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Used to create in data (connects to users.js contorllers) 
// Make sure to install npm i body-parser and require it at the top of this file 
app.use(bodyParser.json());

//CORS
app.use(cors());

// Allows routes to work across sites pass header back and forth so you don't get cross scripting errors
app.use((req, res, next) => {
    // Allow cross origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    // ?? This is for test needs to be changed if we are running production ??
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin: X-Requested-With, Content-Type, Accept, Z-Key'
        );
        // Allows all the methods
        res.setHeader('Access-Control-Allow-OMethods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
});

// ??? Swagger paths ??? This made the localhost:3000, localhost:300/user all display the swagger api-doc
//app.use('./', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

//When the url gets to / include the new library aka routes (redirect)
app.use('/', require('./routes'));

//
mongodb.initDb((err) => {
    if(err) {
        console.log(err)
    }
    else { // Listen for traffic on that port
        app.listen(port, () => {console.log(`Database is listening and node Running on port ${port}`)});
    }
});

