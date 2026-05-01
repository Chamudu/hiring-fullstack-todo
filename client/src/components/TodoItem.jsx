import { useState } from "react";

const TodoItem = ({todo, onToggle, onEdit, onDelete}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description || '');
    const [error, setError] = useState('');

    const handleSave = async () => {
        setError('');
        await onEdit(todo._id, {title: title.trim(), description: description.trim()});
        setIsEditing(false);
    };

    const handleCancel = () => {
        setTitle(todo.title);
        setDescription(todo.description || '');
        setError('');
        setIsEditing(false);
    };

    return(
        <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg transition-opacity duration-300">
        
        <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggle(todo._id)}
            className="mt-1 w-4 h-4 cursor-pointer accent-blue-500"
        />

        <div className="flex-1 min-w-0">
            {isEditing ? (
                <div className="flex flex-col gap-2">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    {error && <p className="text-red-500 text-xs">{error}</p>}

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        rows={2}
                    />

                    <div className="flex gap-2">
                        <button
                            onClick={handleSave}
                            className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-1 rounded transition-colors"
                        >
                            Save
                        </button>

                        <button
                            onClick={handleCancel}
                            className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
                ) : (
                    <div>
                        <p className={`font-medium ${todo.done ? 'line-through opacity-50' : ''}`}>
                         {todo.title}
                        </p>

                        {todo.description && (
                            <p className={`text-sm text-gray-500 mt-1 ${todo.done ? 'line-through opacity-50' : ''}`}>
                                {todo.description}
                            </p>
                        )}

                        <div className="flex flex-wrap gap-x-4 mt-2">
                            <p className="text-xs text-slate-500">
                                Created: {new Date(todo.createdAt).toLocaleString('en-US', {
                                    month: 'short', day: 'numeric', year: 'numeric',
                                    hour: '2-digit', minute: '2-digit',
                                })}
                            </p>
                            <p className="text-xs text-slate-500">
                                Updated: {new Date(todo.updatedAt).toLocaleString('en-US', {
                                    month: 'short', day: 'numeric', year: 'numeric',
                                    hour: '2-digit', minute: '2-digit',
                                })}
                            </p>
                        </div>
                    </div>
                )
            }
        </div>

        {!isEditing && (
            <div className="flex gap-2">
                <button
                    onClick={() => setIsEditing(true)}
                    className="text-blue-500 hover:text-blue-700 text-sm transition-colors"
                >
                    Edit
                </button>

                <button
                    onClick={() => onDelete(todo._id)}
                    className="text-red-500 hover:text-red-700 text-sm transition-colors"
                >
                    Delete
                </button>
            </div>
        )}

    </div>
    );
};

export default TodoItem;