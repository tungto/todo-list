import React from 'react';
import { useTaskContext } from '../../context/task_context';
import TaskItem from '../TaskItem/TaskItem';
import styled from 'styled-components';
const TaskList = () => {
  const { filtered_tasks } = useTaskContext();
  // console.log(filtered_tasks);
  return (
    <TaskListContainer>
      {filtered_tasks.map((task, index) => {
        return <TaskItem key={index} {...task} />;
      })}
    </TaskListContainer>
  );
};

const TaskListContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default TaskList;
