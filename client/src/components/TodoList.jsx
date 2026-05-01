import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onEdit, onDelete }) => {
    if (todos.length === 0) {
        return <p className="text-center text-gray-400 mt-10">No todos yet. Add one above!</p>;
    }

    return (
        <div className="flex flex-col gap-3">
            {todos.map((todo) => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    onToggle={onToggle}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default TodoList;