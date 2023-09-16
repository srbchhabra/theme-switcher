// TaskFilter.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterTasks } from '../redux/actions/taskActions';

function TaskFilter() {
  const [filter, setFilter] = useState('all'); 
  const dispatch = useDispatch();

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    dispatch(filterTasks(selectedFilter)); 
  };

  return (
    <div className="task-filter">
      <label>Filter Tasks:</label>
      <select value={filter} onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}

export default TaskFilter;
