const Todo = require('../models/Todo');

const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find().sort({createdAt: -1});
        res.json(todos);
    } catch (error) { 
        // server eroor
        res.status(500).json({message: 'Failed to fetch todos'});
    }
};


const createTodo = async (req, res) => {
    try {
        const {title, description} = req.body;
        const todo = new Todo({title, description});
        const saved = await todo.save();

        res.status(201).json(saved); // created
    } catch (error) {
        res.status(400).json({message: error.message}) // bad req
    }
};

const updateTodo = async (req, res) => {
    try {
        const {title, description} = req.body;
        const todo = await Todo.findByIdAndUpdate(
            req.params.id, {title, description}, {new: true, runValidators: true}
        );
        if (!todo) {
            return res.status(404).json({message: 'Todo not found'});
        }
        res.json(todo);

    }catch (error) {
        res.status(400).json({message: error.message});
    }
};

const toggledone = async (req, res) => {
    try{
        const todo = await Todo.findById(req.params.id);

        if(!todo) {
            return res.status(404).json({message: "Todo Not Found"});
        }

        todo.done = !todo.done;

        const saved = await todo.save();

        res.json(saved);
    }catch(error) {
        res.status(500).json({message: "Failed to toggle"});
    }
};

const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);

        if(!todo) {
            return res.status(404).json({message: "Todo not found"})

        }

        res.status(204).send(); // no content
    }catch(error) {
        res.status(500).json({message: 'Failed to delete todo'});
    }
};


module.exports = {getAllTodos, createTodo, updateTodo, toggledone, deleteTodo};