import useTodos from './hooks/useTodos';
import TodoForm from './components/ToDoForm';
import TodoList from './components/TodoList';

function App() {
  const {todos, loading, error, addTodo, editTodo, toggleTodo, removeTodo} = useTodos();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-center mb-8">TODO App</h1>
          
          <TodoForm onAdd={addTodo} />

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          {loading ? (
            <p className="text-center text-gray-400 mt-10">Loading...</p>
          ) : (
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onEdit={editTodo}
              onDelete={removeTodo}
            />
        )}
      </div>
    </div>
  );
}

export default App;