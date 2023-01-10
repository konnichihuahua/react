import { useState } from 'react';
import Task from './Task';

function Tasks({ tasks, onDelete, icon, onToggle }) {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          icon={icon}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}

export default Tasks;
