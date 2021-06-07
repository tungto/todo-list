import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/task_reducer';
import * as Types from '../actions';
import { updateLocalStorage } from '../ultils/helpers';

const getLocalStorage = () => {
  let tasks = localStorage.getItem('tasks');
  let selectedItems = localStorage.getItem('selectedItems');
  if (tasks) {
    return {
      tasks: JSON.parse(tasks),
      selectedItems: JSON.parse(selectedItems),
    };
  } else {
    return {
      tasks: [],
      selectedItems: 0,
    };
  }
};

const initialState = {
  tasks: getLocalStorage().tasks,
  selectedItems: getLocalStorage().selectedItems,
  filtered_tasks: [],
  filters: {
    text: '',
  },
  sort: 'due-date',
};

const TaskContext = React.createContext();

const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: Types.LOAD_TASKS, payload: state.tasks });
  }, [state.tasks]);

  useEffect(() => {
    dispatch({ type: Types.FILTER_TASKS });
    dispatch({ type: Types.SORT_TASKS });
  }, [state.sort, state.filters, state.tasks]);

  useEffect(() => {
    updateLocalStorage('tasks', state.tasks);
    updateLocalStorage('selectedItems', state.selectedItems);
  }, [state.tasks, state.selectedItems]);

  const addTask = (task) => {
    dispatch({ type: Types.ADD_TASK, payload: task });
  };

  const removeTask = (id) => {
    dispatch({ type: Types.REMOVE_TASK, payload: id });
  };

  const updateTask = (task) => {
    // console.log('update task', task);
    dispatch({ type: Types.UPDATE_TASK, payload: task });
    updateLocalStorage('tasks', state.tasks);
  };

  const editTask = (id) => {
    dispatch({ type: Types.EDIT_TASK, payload: id });
  };

  const selectTask = (id) => {
    dispatch({ type: Types.SELECT_TASK, payload: id });
    updateLocalStorage('tasks', state.tasks);
    updateLocalStorage('selectedItems', state.selectedItems);
  };

  const removeSelectedTasks = () => {
    dispatch({ type: Types.REMOVE_SELECTED_TASKS });
  };

  const updateFilters = (e) => {
    // console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: Types.UPDATE_FILTERS, payload: { name, value } });
  };

  return (
    <TaskContext.Provider
      value={{
        ...state,
        addTask,
        removeTask,
        updateTask,
        editTask,
        selectTask,
        removeSelectedTasks,
        updateFilters,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

const useTaskContext = () => {
  return useContext(TaskContext);
};

export { useTaskContext, TaskProvider };
