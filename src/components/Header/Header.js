import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.leftPanel}>
        <h1>Галерея проектов</h1>
        <p>
          Сумма экономии рассчитана в сравнении с суммой цен этого же перечня
          товаров по отдельности
        </p>

        <button>Выбрать дизайн</button>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.dottedBackground}></div>
        <div className={styles.textWrapper}>
          <p>
            Мы успешно завершили уже <span>более 450</span> ремонтов
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
