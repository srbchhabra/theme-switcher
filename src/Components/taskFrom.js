// TaskForm.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';
import styles from './taskfrom.module.css'; 

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (title.trim() === '') return; 
    const newTask = {
        id: Date.now(),
      title,
      description,
      completed: false, 
    };
    dispatch(addTask(newTask));
    console.log(newTask,"payload")
    setTitle('');
    setDescription('');
  };
  const currentTheme = useSelector((state) => state.theme.theme);
  const themeClass = currentTheme === 'light' ? styles.taskcontainer : styles.taskcontainerDark;

  return (
    <div className={`${styles.taskcontainer} ${themeClass}`}>
         <h2>Add a New Task</h2>
        <div className={styles.task_form}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Add Task</button>
      </div>
    </div>
  );
}

export default TaskForm;
