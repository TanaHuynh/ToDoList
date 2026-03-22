// Assignment requirement: 
// • Dùng **keys** ổn định (ví dụ: id sinh từ timestamp hoặc counter). 
// • State đặt ở component cha (App) và **truyền handler xuống** (lifting state up).

import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import './App.css';

function App() {
  // https://react.dev/learn/state-a-components-memory
  // https://react.dev/learn/updating-arrays-in-state
  const [todos, setTodos] = useState([]);

  const leftCount = todos.filter(todo => !todo.completed).length;

  const [filter, setFilter] = useState('all');

  // Function: Add new ToDo
  // https://react.dev/learn/updating-arrays-in-state#adding-to-an-array
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
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

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">やることリスト</h1>
      </header>

      <main className="app-content">
        <TodoList
          items={todos}
          onToggle={toggleTodo}
          onRemove={removeTodo}
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