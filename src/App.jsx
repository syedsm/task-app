// src/App.jsx
import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="app-container d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center mb-4">React To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
