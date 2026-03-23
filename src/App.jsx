// Assignment requirement: 
// • Dùng **keys** ổn định (ví dụ: id sinh từ timestamp hoặc counter). 
// • State đặt ở component cha (App) và **truyền handler xuống** (lifting state up).

import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import './App.css';

function App() {
  // https://react.dev/learn/state-a-components-memory
  // https://react.dev/learn/updating-arrays-in-state
  // Function: LocalStorage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos);
      } catch (error) {
        console.error("JSONパースエラー:", error);
        return [];
      }
    }
    return [];
  });

  // Function: LocalStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const leftCount = todos.filter(todo => !todo.completed).length;

  const [filter, setFilter] = useState('all');

  // Function: Add new ToDo
  // https://react.dev/learn/updating-arrays-in-state#adding-to-an-array
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
      isEditing: false
    };
    setTodos([...todos, newTodo]);
  };

  // Function: Completed ToDo
  // https://react.dev/learn/updating-arrays-in-state#transforming-an-array
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function: Remove ToDo
  // Document: https://react.dev/learn/updating-arrays-in-state#removing-from-an-array
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function: Filter Todo
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Function: Edit Todo
  const startEdit = (id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, isEditing: true } : t));
  };

  const saveEdit = (id, newText) => {
    const value = newText.trim();
    if (!value) return;
    setTodos(prev => prev.map(t => t.id === id ? { ...t, text: value, isEditing: false } : t));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">やることリスト</h1>
        <div className="filter-tabs">
          <button
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}>すべて
          </button>

          <button
            className={filter === 'active' ? 'active' : ''}
            onClick={() => setFilter('active')}>未完了
          </button>

          <button
            className={filter === 'completed' ? 'active' : ''}
            onClick={() => setFilter('completed')}>完了
          </button>
        </div>
      </header>

      <main className="app-content">
        <TodoList
          items={filteredTodos}
          onToggle={toggleTodo}
          onRemove={removeTodo}
          onStartEdit={startEdit} // Function: Edit Todo
          onSaveEdit={saveEdit}   // Function: Edit Todo
        />
      </main>

      {/* https://react.dev/learn/conditional-rendering */}
      <footer className="app-footer-area">
        {todos.length > 0 && <TodoFooter leftCount={leftCount} />}
        <TodoInput addTodo={addTodo} />
      </footer>
    </div>
  );
}

export default App;