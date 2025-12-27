import React, { useState } from 'react';

function TaskForm({ onAdd }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = () => {
    onAdd({
      id: Date.now(),
      name,
      description,
      status: 'pending'
    });
  };

  return (
    <div>
      <input
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default TaskForm;
