import React, { useState } from 'react';
import Home from './components/Home';
import TaskForm from './components/TaskForm';

import Tasks from './components/Tasks';

function App() {
  const [view, setView] = useState('list');
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task One', description: 'First task', status: 'pending' },
    { id: 2, name: 'Task Two', description: 'Second task', status: 'completed' }
  ]);
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setView('list');
  };

  const updateStatus = (status) => {
    setSelectedTask({ ...selectedTask, status });
  };

  return (
    <div>
      <h1>Task Management</h1>

      <button onClick={() => setView('add')}>Add Task</button>
      <button onClick={() => setView('list')}>Task List</button>

      {view === 'list' && (
        <Home tasks={tasks} onViewDetails={(task) => {
          setSelectedTask(task);
          setView('details');
        }} />
      )}

      {view === 'add' && <TaskForm onAdd={addTask} />}

      {view === 'details' && selectedTask && (
        <Tasks task={selectedTask} onUpdateStatus={updateStatus} />
      )}
    </div>
  );
}

export default App;
