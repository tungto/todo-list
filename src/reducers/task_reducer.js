import * as Types from '../actions';
import { findTaskIndex } from '../ultils/helpers';

const task_reducer = (state, action) => {
  if (action.type === Types.LOAD_TASKS) {
    return { ...state, tasks: action.payload, filtered_tasks: action.payload };
  }

  if (action.type === Types.ADD_TASK) {
    return { ...state, tasks: [...state.tasks, action.payload] };
  }

  if (action.type === Types.REMOVE_TASK) {
    const newTaskList = state.tasks.filter(
      (task) => task.id !== action.payload
    );
    return { ...state, tasks: newTaskList };
  }

  if (action.type === Types.EDIT_TASK) {
    const updatedTaskList = [...state.tasks];
    const editTaskIndex = findTaskIndex(state.tasks, action.payload);
    updatedTaskList[editTaskIndex].isEditing = true;
    return { ...state, tasks: updatedTaskList };
  }

  if (action.type === Types.UPDATE_TASK) {
    const updatedTaskIndex = findTaskIndex(state.tasks, action.payload);
    const updatedTaskList = [...state.tasks];
    updatedTaskList[updatedTaskIndex] = action.payload;
    return {
      ...state,
      tasks: updatedTaskList,
    };
  }

  if (action.type === Types.SELECT_TASK) {
    let { selectedItems } = state;
    const updatedTaskList = state.tasks.map((task) => {
      if (task.id === action.payload) {
        selectedItems += !task.isSelected ? 1 : -1;
        return { ...task, isSelected: !task.isSelected };
      } else {
        return task;
      }
    });

    return {
      ...state,
      tasks: updatedTaskList,
      selectedItems,
    };
  }

  if (action.type === Types.REMOVE_SELECTED_TASKS) {
    const updatedTaskList = state.tasks.filter((task) => !task.isSelected);
    return { ...state, tasks: updatedTaskList, selectedItems: 0 };
  }

  if (action.type === Types.UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === Types.FILTER_TASKS) {
    const tempTasks = [...state.tasks];
    const { text } = state.filters;
    const searchResults = tempTasks.filter((task) => {
      return task.title.toLowerCase().startsWith(text.toLowerCase());
    });
    return {
      ...state,
      filtered_tasks: searchResults,
    };
  }

  if (action.type === Types.SORT_TASKS) {
    let sortedTasks = [...state.filtered_tasks];
    const { sort } = state;
    if (sort === 'due-date') {
      sortedTasks = sortedTasks.sort((a, b) => {
        if (typeof a.dueDate === 'object' && a.dueDate !== null) {
          a.dueDate = JSON.parse(JSON.stringify(a.dueDate));
        }
        if (typeof b.dueDate === 'object' && b.dueDate !== null) {
          b.dueDate = JSON.parse(JSON.stringify(b.dueDate));
        }

        return new Date(a.dueDate) - new Date(b.dueDate);
      });
    }

    return {
      ...state,
      filtered_tasks: sortedTasks,
    };
  }

  throw new Error(`No Matching ${action.type} - action type`);
};

export default task_reducer;
