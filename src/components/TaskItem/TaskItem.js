import React, { useState } from 'react';
import TaskForm from '../TaskForm/TaskForm';
import { useTaskContext } from '../../context/task_context';

const TaskItem = (task) => {
  const { removeTask, selectTask } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const { title, id, isSelected, dueDate } = task;

  return (
    <div className='task-container'>
      <div className='task'>
        <input
          type='checkbox'
          name='checkbox'
          checked={isSelected}
          onChange={() => selectTask(id, isSelected)}
        />
        <p className='task-title'>{title}</p>
        <p className='task-title'>{dueDate}</p>
        <div className='buttons'>
          <button onClick={() => setIsEditing(true)}>detail</button>
          <button onClick={() => removeTask(id)}>remove</button>
        </div>
      </div>
      {isEditing && (
        <TaskForm
          task={task}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default TaskItem;
