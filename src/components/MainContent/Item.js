import React from 'react';
import styles from './Item.module.css';

const Item = ({ title, clickHandler }) => {
  return (
    <li onClick={clickHandler} className={styles.item}>
      {title}
    </li>
  );
};

export default Item;
