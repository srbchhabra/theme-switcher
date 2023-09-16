

import { ADD_TASK,EDIT_TASK, DELETE_TASK, TOGGLE_TASK_STATUS, FILTER_TASKS } from '../actions/taskActions';

const initialState = {
  tasks: [],
  filter: 'all', 
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      case 'EDIT_TASK':
        if (!Array.isArray(state)) {
          // If state is not an array, return it as is
          return state;
        }
        return state.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task
        );
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TOGGLE_TASK_STATUS:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case FILTER_TASKS:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
