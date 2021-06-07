import React from 'react';
import { useTaskContext } from '../../context/task_context';

const BuldAction = (task) => {
  const { removeSelectedTasks } = useTaskContext();
  // const [isEditing, setIsEditing] = useState(false);
  // const { title, id, isSelected } = task;

  return (
    <div className='buld-action-container'>
      <button onClick={removeSelectedTasks}>remove</button>
      <button>done</button>
    </div>
  );
};

export default BuldAction;
