import { useState } from "react";

const TodoForm = ({onAdd}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] =useState('');

    const handleSubmit =async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            setError('Tittle required!');
            return;
        }

        setError('');
        await onAdd({ title: title.trim(), description: description.trim()});
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-gray-700">Add a New TODO</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <textarea
                placeholder="Description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition"
                rows={2}
            />

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors"
            >
                + Add TODO
            </button>
        </form>
    );
};

export default TodoForm;