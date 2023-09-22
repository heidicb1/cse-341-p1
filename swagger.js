// Add new swagger script to package.json file
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Contacts API',
  },
  // If you publish use the actual published URL for host (render?)
  host: 'localhost:3000',
  schemes: ['https', 'http'],
};

// This is the file we output to
const outputFile = './swagger.json';
// The routes only needed to use one file because we are using router
const endpointsFiles = ['./routes/index.js'];

// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

//Run server after it get generated. 
// Run this file from package.json and everytime it create this file first and then the app.js file
/* swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
    await import ('./app.js');
}) */