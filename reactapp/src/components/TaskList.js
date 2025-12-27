// import React from 'react';

function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map(task => (
        <p key={task.id}>{task.name} - {task.status}</p>
      ))}
    </div>
  );
}

export default TaskList;
