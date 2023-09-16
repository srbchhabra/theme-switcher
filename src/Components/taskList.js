// TaskList.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  editTask,deleteTask, toggleTaskStatus } from '../redux/actions/taskActions';
import styles from "./tasklist.module.css"

function TaskList() {
  const taskslist = useSelector((state) => state?.tasks?.tasks); 
  const dispatch = useDispatch();
  const [editableTask, setEditableTask] = useState([]);

  const handleEditClick = (task) => {
    setEditableTask(task);
  };
  const handleSaveClick = () => {
    if (editableTask) {
      dispatch(editTask(editableTask));
      setEditableTask(null);
    }
  };
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleTaskStatus = (taskId) => {
    dispatch(toggleTaskStatus(taskId));
  };
  const currentTheme = useSelector((state) => state.theme.theme);
  const themeClass = currentTheme === 'light' ? styles.task : styles.taskDark;
  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {taskslist?.map((task) => (
          <li key={task.id} className={`${styles.task} ${themeClass} ${task.completed ? 'completed' : ''}`}>
            {editableTask && editableTask.id === task.id ? (
              <div style={{display:'flex',flexDirection:'column',gap:"2px"}} >
                <input
                  type="text"
                  value={editableTask.title}
                  onChange={(e) =>
                    setEditableTask({
                      ...editableTask,
                      title: e.target.value,
                    })
                  }
                />
                <button onClick={handleSaveClick}>Save</button>
              </div>
            ) : (
              <div>
                <h3>{task.title}</h3><br></br>
                <button onClick={() => handleEditClick(task)}>Edit</button>
              </div>
            )}
            <button onClick={() => handleToggleTaskStatus(task.id)}>
              {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TaskList;
