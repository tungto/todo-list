import React from 'react';
import { Link } from 'react-router-dom';
import BuldAction from '../../components/BuldAction/BuldAction';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import TaskList from '../../components/TaskList/TaskList';
import { useTaskContext } from '../../context/task_context';
import styled from 'styled-components';

const HomePage = () => {
  const { tasks, selectedItems } = useTaskContext();
  if (!tasks || tasks.length < 1) {
    return (
      <div>
        <h1>there is no tasks</h1>
        <Link to='/add' exact='true'>
          fill it
        </Link>
      </div>
    );
  }
  return (
    <wrapper>
      <div className='home-page section-center'>
        <Header />
        <h3>Home</h3>
        <SearchBar />
        <TaskList />
        {selectedItems > 0 && <BuldAction />}
      </div>
    </wrapper>
  );
};

const wrapper = styled.div`
  .home-page {
    padding: 3rem;
  }
`;

export default HomePage;
