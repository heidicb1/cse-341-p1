// Add express and express router
const express = require('express');
const router = express.Router();

// Redirect to another folder called controllers to keep all logic straight
const usersController = require('../controllers/users');

// create two routes get and get all in this current file and variables in the user.js controllers folder 
// Add all 5 endpoints
// get all route
router.get('/', usersController.getAll);
// get route
router.get('/:id', usersController.getSingle);
// Used to create
router.post('/', usersController.createUser);
// Used to update
router.put('/:id', usersController.updateUser);
// Used to remove
router.delete('/:id', usersController.deleteUser);
// Export
module.exports = router;


