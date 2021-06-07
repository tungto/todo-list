import React from 'react';
import TaskForm from '../../components/TaskForm/TaskForm';

const AddTaskItemPage = (props) => {
  console.log(props.match, props.history);
  return (
    <div className='add-task-container'>
      <h1>Add</h1>
      <TaskForm match={props.match} history={props.history} />
    </div>
  );
};

export default AddTaskItemPage;
