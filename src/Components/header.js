// Header.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/actions/themeActions';
import styles from './header.module.css'; 

function Header() {
  const currentTheme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

 
  const themeClass = currentTheme === 'light' ? styles.light : styles.dark;

  return (
    <header className={`${styles.header} ${themeClass}`}>
      <h1>Task Manager</h1>
      <button className={styles.button} onClick={toggleThemeHandler}>
        Toggle Theme
      </button>
    </header>
    
  );
}

export default Header;
