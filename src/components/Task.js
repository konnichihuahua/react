import React from 'react';
import { FaTimes } from 'react-icons/fa';
function Task({ task, onDelete, icon, onToggle }) {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {icon} {task.name}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => {
            onDelete(task.id);
          }}
        />
      </h3>
      <p> {task.date} </p>
    </div>
  );
}

export default Task;
