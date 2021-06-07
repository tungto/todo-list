import React from 'react';
import Header from '../../components/Header/Header';
import TaskForm from '../../components/TaskForm/TaskForm';
import styled from 'styled-components';

const AddTaskItemPage = (props) => {
  console.log(props.match, props.history);
  return (
    <div className='add-task-container section-center'>
      <Header />
      <h3>Add</h3>
      <TaskForm match={props.match} history={props.history} />
    </div>
  );
};

const wrapper = styled.div``;
export default AddTaskItemPage;
