import React, { useState } from 'react';
import './Header.css';
import styles from './Header.module.css';

const Header = () => {
  const [color, setColor] = useState('red');
  const alertButton = () => {
    setColor('blue');
    alert('Color change to' + color);
  };
  return (
    <div>
      <h1 className='title'>Title {1 + 1}</h1>
      <p style={{ margin: '10px', color: 'red' }}>
        My Favorite Color is {color}
      </p>
      <button className={styles.button} type='button' onClick={alertButton}>
        Klik disini{' '}
      </button>
    </div>
  );
};

export default Header;
