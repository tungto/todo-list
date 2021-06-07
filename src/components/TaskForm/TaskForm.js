import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useTaskContext } from '../../context/task_context';
import 'react-datepicker/dist/react-datepicker.css';
import { randomID } from '../../ultils/helpers';

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

  useEffect(() => {
    if (isEditing) {
      setstate(props.task);
    }
  }, [props.task, isEditing]);

  const submitForm = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateTask(state);
      props.setIsEditing(false);
    } else {
      addTask({ ...state, id: randomID() });
      props.history.goBack();
    }
  };
  const { title, description, priority, dueDate } = state;
  return (
    <form className='search-bar-container' onSubmit={submitForm}>
      <input
        type='text'
        placeholder='Add new task'
        className='input-title'
        value={title}
        onChange={(e) => setstate({ ...state, title: e.target.value })}
      />
      <div className='description'>
        <label htmlFor='description'>description</label>
        <input
          type='text'
          placeholder=''
          name='description'
          value={description}
          onChange={(e) => setstate({ ...state, description: e.target.value })}
        />
      </div>
      <div className='other-infos'>
        <div className='due-date'>
          <label htmlFor='date'>Due Date</label>
          <DatePicker
            selected={Date.parse(dueDate)}
            onChange={(date) => setstate({ ...state, dueDate: date })}
            dateFormat='d MMMM yyyy'
          />
        </div>
        <div className='priority'>
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

      <button type='submit'>{`${isEditing ? 'update' : 'add'}`}</button>
    </form>
  );
};

export default TaskForm;
