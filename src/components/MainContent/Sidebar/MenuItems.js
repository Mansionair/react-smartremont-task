import React from 'react';
import Item from './Item';
import styles from './MenuItems.module.css';

const MenuItems = (props) => {
  return (
    <div className={styles.itemsWrapper}>
      <p>Найдено {props.total} объектов:</p>
      <ul className={styles.itemsList}>
        {props.items.map((item) => (
          <div
            key={item.id}
            className={
              props.currentId === item.id - 1 ? styles.selectedItem : null
            }
          >
            <Item
              clickHandler={() => {
                props.clickHandler(item.id - 1);
              }}
              title={item.title}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
