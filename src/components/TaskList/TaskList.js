import React from 'react';
import { useTaskContext } from '../../context/task_context';
import TaskItem from '../TaskItem/TaskItem';
import styled from 'styled-components';
import BuldAction from '../BuldAction/BuldAction';
const TaskList = () => {
  const { filtered_tasks, selectedItems } = useTaskContext();

  if (filtered_tasks.length < 1) {
    return <h1>No task found</h1>;
  }
  return (
    <TaskListContainer>
      {filtered_tasks.map((task, index) => {
        return <TaskItem key={index} {...task} />;
      })}

      {selectedItems > 0 && <BuldAction />}
    </TaskListContainer>
  );
};

const TaskListContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default TaskList;
