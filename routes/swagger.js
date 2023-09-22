const router = require('express').Router();
const swaggerUI = require('swagger-ui-express');
// Where are json file lives
const swaggerDocument = require('../swagger.json');
// ?? api-docs is the URL to hit swagger ??
router.use('/api-docs', swaggerUI.serve);
router.get('/api-docs', swaggerUI.setup(swaggerDocument));


module.exports = router;