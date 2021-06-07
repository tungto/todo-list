import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useTaskContext } from '../../context/task_context';
import 'react-datepicker/dist/react-datepicker.css';
import { randomID } from '../../ultils/helpers';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const initialState = {
  id: null,
  title: '',
  description: '',
  priority: 'normal',
  dueDate: new Date(),
  isSelected: false,
};

const TaskForm = (props) => {
  const { addTask, updateTask } = useTaskContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [state, setstate] = useState(initialState);
  const { isEditing } = props;

  useEffect(() => {
    if (isEditing) {
      setstate(props.task);
    }
  }, [props.task, isEditing]);

  const submitForm = (e) => {
    // e.preventDefault();
    if (isEditing) {
      updateTask(state);
      props.setIsEditing(false);
    } else {
      addTask({ ...state, id: randomID() });
      props.history.push('/');
    }
  };

  const { title, description, priority, dueDate } = state;
  return (
    <FormContainer>
      <form className='add-taks-form' onSubmit={handleSubmit(submitForm)}>
        <input
          type='text'
          placeholder='Add new task'
          className='input-title'
          name='title'
          value={title}
          {...register('message', {
            required: 'Required',
          })}
          onChange={(e) => setstate({ ...state, title: e.target.value })}
        />
        {errors.message && errors.message.message}
        <div className='description form-section field'>
          <label htmlFor='description'>description</label>
          <textarea
            type='text'
            placeholder=''
            name='description'
            value={description}
            onChange={(e) =>
              setstate({ ...state, description: e.target.value })
            }
          />
        </div>
        <div className='other-infos form-section'>
          <div className='due-date field'>
            <label htmlFor='date'>Due Date</label>
            <DatePicker
              selected={Date.parse(dueDate)}
              onChange={(date) => setstate({ ...state, dueDate: date })}
              dateFormat='d MMMM yyyy'
              minDate={new Date()}
            />
          </div>
          <div className='priority field'>
            <label htmlFor='priority'>priority</label>
            <select
              value={priority}
              onChange={(e) => setstate({ ...state, priority: e.target.value })}
            >
              <option value='low'>low</option>
              <option value='normal'>normal</option>
              <option value='high'>high</option>
            </select>
          </div>
        </div>

        <button type='submit' className='btn btn-add'>{`${
          isEditing ? 'update' : 'add'
        }`}</button>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  .add-taks-form {
    padding: 3rem;
    .input-title {
      padding: 10px;
      width: 80%;
      border-radius: var(--radius);
      font-size: 1rem;
    }
    .field {
      display: flex;
      flex-direction: column;
    }
    .description {
      textarea {
        height: 125px;
      }
    }

    .form-section {
      width: 80%;
      margin: 0 auto;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    label {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      text-transform: capitalize;
      font-weight: 500;
      text-align: left;
    }
    .other-infos {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      input,
      select {
        width: 100%;
        padding: 0.5rem;
      }
    }
    .btn-add {
      background: var(--clr-red-dark);
      margin-top: 3rem;
      width: 6rem;
      :hover {
        background: var(--clr-red-light);
      }
    }
  }
`;
export default TaskForm;
