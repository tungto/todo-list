import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useTaskContext } from '../../context/task_context';
import 'react-datepicker/dist/react-datepicker.css';
import { randomID } from '../../ultils/helpers';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { BsCalendar } from 'react-icons/bs';
import PropTypes from 'prop-types';

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
  const [state, setstate] = useState(initialState);
  const { isEditing } = props;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isEditing) {
      setstate(props.task);
      setValue('title', props.task.title);
    }
  }, [props.task, isEditing, setValue]);

  const submitForm = () => {
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
          defaultValue={title}
          {...register('title', { required: true })}
          onChange={(e) => setstate({ ...state, title: e.target.value })}
        />
        {errors.title && <p className='error-msg'>This field is required</p>}

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
            <div className='date-bar'>
              <DatePicker
                selected={Date.parse(dueDate)}
                onChange={(date) => setstate({ ...state, dueDate: date })}
                dateFormat='d MMMM yyyy'
                minDate={new Date()}
              />
              <BsCalendar />
            </div>
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

TaskForm.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  priority: PropTypes.string,
  dueDate: PropTypes.instanceOf(Date),
  isSelected: PropTypes.bool,
};

const FormContainer = styled.div`
  .add-taks-form {
    padding: 3rem;
    .input-title {
      padding: 10px;
      width: 80%;
      border-radius: var(--radius);
    }
    .field {
      display: flex;
      flex-direction: column;
    }
    .description {
      textarea {
        height: 125px;
        padding: 0.5rem;
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
      .date-bar {
        display: flex;
        position: relative;
        .react-datepicker-wrapper {
          width: 100%;
        }
        svg {
          width: 34px;
          height: 34px;
          position: absolute;
          right: 0px;
        }
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
    .error-msg {
      text-align: left;
      width: 80%;
      color: var(--clr-red-dark);
      margin: 0 auto;
    }

    @media (max-width: 800px) {
      padding: 1rem 0 1rem 0;
      .btn-add {
        margin-top: 1rem;
      }
    }
  }
`;
export default TaskForm;
