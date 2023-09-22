// Allows us to handle routes
const router = require('express').Router();

router.use('/', require('./swagger'));

// Any get request is going to return this back
// #swagger.tages=['Hello World]
router.get('/', (req, res) => {res.send('Hello World');});

//Set up userinteractions/user table
// Look for routes.js file. There isn't one 
// Now it will look for a routes folder and an index.js
// It is there so it will route to that
router.use('/users', require('./users'));


module.exports = router;