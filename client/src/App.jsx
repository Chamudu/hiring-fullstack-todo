import useTodos from './hooks/useTodos';
import TodoForm from './components/ToDoForm';
import TodoList from './components/TodoList';

function App() {
  const {todos, loading, error, addTodo, editTodo, toggleTodo, removeTodo} = useTodos();
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto px-4 py-12">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800">
            My <span className="text-blue-500">TODOs</span>
          </h1>
          <p className="text-gray-400 mt-1 text-sm">Stay organized. Get things done.</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
          <TodoForm onAdd={addTodo} />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-300 text-red-600 px-4 py-3 rounded-xl mb-4 text-sm">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center mt-16">
            <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
          </div>
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