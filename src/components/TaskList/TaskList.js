import React from 'react';
import { useTaskContext } from '../../context/task_context';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = () => {
  const { filtered_tasks } = useTaskContext();
  console.log(filtered_tasks);
  return (
    <div className='search-bar-container'>
      {filtered_tasks.map((task, index) => {
        return <TaskItem key={index} {...task} />;
      })}
    </div>
  );
};

export default TaskList;
