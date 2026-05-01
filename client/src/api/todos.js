import axios from 'axios';

const BASE_URL = '/api/todos';

export const getTodos = () => axios.get(BASE_URL);

export const createTodo = (data) => axios.post(BASE_URL, data);

export const updateTodo = (id, data) => axios.put(`${BASE_URL}/${id}`, data);

export const toggleDone = (id) => axios.patch(`${BASE_URL}/${id}/done`);

export const deleteTodo = (id) => axios.delete(`${BASE_URL}/${id}`);


