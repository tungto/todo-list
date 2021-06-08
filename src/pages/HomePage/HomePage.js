import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import TaskList from '../../components/TaskList/TaskList';
import { useTaskContext } from '../../context/task_context';
import styled from 'styled-components';

const HomePage = () => {
  const { tasks } = useTaskContext();
  if (!tasks || tasks.length < 1) {
    return (
      <Wrapper>
        <h1>there is no tasks</h1>
        <Link to='/add' exact='true' className='btn btn-fill'>
          Add Task
        </Link>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className='home-page section-center'>
        <Header />
        <h3>To Do List</h3>
        <SearchBar />
        <TaskList />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .btn-fill {
    background: var(--clr-blue-dark);
  }
  .home-page {
    padding-right: 3rem;
    padding-left: 3rem;

    @media (max-width: 800px) {
      padding-right: 0rem;
      padding-left: 0rem;
    }
  }
`;

export default HomePage;
