import React, { useState } from 'react';
import styles from './MainContent.module.css';
import MenuItems from './MenuItems';
import ImageSlider from './ImageSlider';
import imagesJSON from '../../images.json';
import dataJSON from '../../data.json';

const MainContent = () => {
  // Mock data
  const images = imagesJSON.images;
  const data = dataJSON;
  const [index, setIndex] = useState(0);

  const clickHandler = (id) => {
    setIndex(() => id);
  };

  // Slider button click handlers
  const handleNext = () => {
    setIndex((currentId) => currentId + 1);
  };

  const handlePrev = () => {
    setIndex((currentId) => currentId - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {/* Why not use inline styles sometimes :) */}
        <div style={{ position: 'relative' }}>
          <p
            style={{
              fontSize: '1rem',
              position: 'absolute',
              top: -28,
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '1.8px',
            }}
          >
            Тип ремонта
          </p>
          <select disabled className={styles.customSelect} name='Тип ремонта'>
            <option value='0'>Smart Comfort</option>
          </select>
        </div>

        <MenuItems
          currentId={index}
          clickHandler={clickHandler}
          total={data.total}
          items={data.items}
        />
      </div>
      <div className={styles.content}>
        <ImageSlider
          currentId={index}
          total={data.total}
          items={data.items}
          images={images}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </div>
  );
};

export default MainContent;
