import React, { useState } from 'react';

function Tasks({ task, onUpdateStatus }) {
  const [status, setStatus] = useState(task.status);

  const update = (newStatus) => {
    setStatus(newStatus);
    onUpdateStatus(newStatus);
  };

  return (
    <div>
      <h2>Task Details</h2>
      <p>Name: {task.name}</p>
      <p>Description: {task.description}</p>

      <button onClick={() => update('pending')}>Pending</button>
      <button onClick={() => update('in progress')}>In Progress</button>
      <button onClick={() => update('completed')}>Completed</button>

      <p>Current: {status}</p>
    </div>
  );
}

export default Tasks;
