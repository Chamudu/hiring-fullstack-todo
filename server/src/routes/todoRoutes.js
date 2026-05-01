const express = require('express');
const router = express.Router();

const {
    getAllTodos,
    createTodo,
    updateTodo,
    toggledone,
    deleteTodo
} = require('../controllers/todoController');

router.get('/', getAllTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.patch('/:id/done', toggledone);
router.delete('/:id', deleteTodo);

module.exports = router;