
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK_STATUS = 'TOGGLE_TASK_STATUS';
export const FILTER_TASKS = 'FILTER_TASKS';
export const EDIT_TASK = 'EDIT_TASK';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const toggleTaskStatus = (taskId) => ({
  type: TOGGLE_TASK_STATUS,
  payload: taskId,
});

export const filterTasks = (filter) => ({
  type: FILTER_TASKS,
  payload: filter,
});
export const editTask = (editedTask) => {
    return {
      type: EDIT_TASK,
      payload: editedTask,
    };
  };