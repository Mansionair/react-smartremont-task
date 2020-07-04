import React from 'react';
import styles from './ImageSlider.module.css';

const ImageSlider = ({
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

      <div className={styles.itemDescriptionWrapper}>
        <div className={styles.itemDescription}>
          <h3>{titles[currentId]}</h3>
          <span className={styles.itemAddress}>{addresses[currentId]}</span>
          <p>{descs[currentId]}</p>
        </div>
        <div className={styles.itemsCounter}>
          <span className={styles.currentItem}>{currentId + 1}</span>
          <span className={styles.totalItems}>{total}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
