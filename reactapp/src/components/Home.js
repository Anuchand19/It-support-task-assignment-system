import React from 'react';

function Home({ tasks, onViewDetails }) {
  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <p>{task.name} - {task.status}</p>
          <button onClick={() => onViewDetails(task)}>View Details</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
