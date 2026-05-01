import {useState, useEffect} from 'react';
import * as api from '../api/todos';

const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const res = await api.getTodos();
                setTodos(res.data);
            } catch {
                setError('Loading Failed');
            } finally {
                setLoading(false);
            }
        };
        fetchTodos();
    }, []);

    const addTodo = async (data) => {
        try {
            const res =await api.createTodo(data);
            setTodos((prevTodo) => [res.data, ...prevTodo]);
        } catch (err)  {
            setError(err.response?.data?.message || 'Failed Creating');
        }
    };

    const editTodo = async (id, data) => {
        const original = todos.find((todo) => todo._id === id);
        setTodos((prevTodo) => 
            prevTodo.map((todo) => 
                (todo._id === id ? {...todo, ...data} : todo)));

        try {
            const res =await api.updateTodo(id, data);
            setTodos((prevTodo) => 
                prevTodo.map((todo) => 
                    (todo._id === id ? res.data : todo)));
        }catch {
            setTodos((prevTodo) => 
                prevTodo.map((todo) => 
                    (todo._id === id ? original : todo)));
            setError('Failed Update');
        }

    };

    const toggleTodo = async (id) => {
        const original = todos.find((todo) =>
            todo._id === id);
        setTodos((prevTodo) => 
            prevTodo.map((todo) =>
                todo._id === id ? {...todo, done: !todo.done} :todo));
        try {
            const res = await api.toggleDone(id);
            setTodos((prevTodo) =>
                prevTodo.map((todo) =>
                    (todo._id === id ? res.data : todo)));
        } catch {
            setTodos((prevTodo) =>
                prevTodo.map((todo) =>
                    (todo._id === id ? original : todo)));
            setError('Failed Update');
        }
    }

    const removeTodo = async (id) => {
        setTodos((prevTodo) => 
            prevTodo.filter((todo) => 
                todo._id !== id));

        try {
            await api.deleteTodo(id);
        } catch {
            setError ('Delete Failed');
        }
    };

    return {todos, loading, error, addTodo, editTodo, toggleTodo, removeTodo};


};

export default useTodos;

