

import React from 'react';
import TaskForm from './taskFrom';
import TaskList from './taskList';
import TaskFilter from './taskFilter';

function TaskManager() {
  return (
    <div className="task-manager">
      <TaskForm />
       <TaskFilter />
      <TaskList /> 
    </div>
  );
}

export default TaskManager;
