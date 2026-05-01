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
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-8">
            <h2 className="text-xl font-semibold"> Add a New TODO</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <textarea
                placeholder="Description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                rows={2}
            />

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded transition-colors"
            >
                Add TODO
            </button>

        </form>
    );
};

export default TodoForm;