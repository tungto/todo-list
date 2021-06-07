import React from 'react';
import { useTaskContext } from '../../context/task_context';
import styled from 'styled-components';

const BuldAction = (task) => {
  const { removeSelectedTasks } = useTaskContext();

  return (
    <Wrapper>
      <div className='buld-action-container'>
        <button className='btn btn-remove-select' onClick={removeSelectedTasks}>
          remove
        </button>
        <button className='btn btn-done'>done</button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .btn {
    width: 100px;
  }
  .btn-remove-select {
    background-color: var(--clr-red-dark);
    margin-right: 1rem;
    :hover {
      background-color: var(--clr-red-light);
    }
  }
  .btn-done {
    background-color: var(--clr-dodger-dark);
    :hover {
      background-color: var(--clr-dodger-light);
    }
  }
`;

export default BuldAction;
