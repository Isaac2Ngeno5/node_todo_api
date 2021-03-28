const Todo = require('../models/TodoModel');

exports.findAll = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).send({
      status: true,
      data: todos,
      message: 'Todos retrieved successfully'
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: error.message || "Some error occured while retrieving applications",
    });
  }
};



