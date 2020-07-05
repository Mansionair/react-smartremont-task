import React from 'react';
import styles from './Slider.module.css';

const Slider = ({
  currentId,
  images,
  items,
  total,
  handleNext,
  handlePrev,
}) => {
  const descs = items.map((item) => item.description);
  const addresses = items.map((item) => item.address);
  const titles = items.map((item) => item.title);

  return (
    <div>
      <div className={styles.sliderContainer}>
        <img src={images[currentId]} alt='' />
        <div className={styles.buttonsContainer}>
          <button
            disabled={currentId === 0 ? true : false}
            onClick={handlePrev}
          ></button>
          <button
            disabled={currentId === total - 1 ? true : false}
            onClick={handleNext}
          ></button>
        </div>
      </div>

      <div className={styles.itemDescription}>
        <div className={styles.itemTitleWithCounter}>
          <div className={styles.itemTitle}>
            <h3>{titles[currentId]}</h3>
            <span className={styles.itemAddress}>{addresses[currentId]}</span>
          </div>
          <div className={styles.itemsCounter}>
            <span className={styles.currentItem}>{currentId + 1}</span>
            <span className={styles.totalItems}>{total}</span>
          </div>
        </div>
        <p>{descs[currentId]}</p>
      </div>
    </div>
  );
};

export default Slider;
