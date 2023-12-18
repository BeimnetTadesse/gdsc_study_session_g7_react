 
import React from 'react';

const TodoItem = ({ task, removeTask, toggleTaskCompletion }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <span>{task.text}</span>
      <div className="actions">
        <button onClick={() => toggleTaskCompletion(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => removeTask(task.id)}>Remove</button>
      </div>
    </li>
  );
};

export default TodoItem;
