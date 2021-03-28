const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');



// Get all  Application
router.get("/", TodoController.findAll);


module.exports = router;
