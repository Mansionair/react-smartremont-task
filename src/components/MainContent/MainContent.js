import React, { useState } from 'react';
import styles from './MainContent.module.css';
import MenuItems from './Sidebar/MenuItems';
import Slider from './Slider/Slider';
import imagesJSON from '../../images.json';
import dataJSON from '../../data.json';
import Dropdown from '../common/Dropdown';

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

  // Dropdown selected option change hanlder
  const onDropdownChange = (itemId) => {
    setIndex(() => itemId);
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
          <Dropdown
            currentOption={2}
            data={['Smart Standard', 'Smart Optimal', 'Smart Comfort']}
            onChange={() => {}}
          />
          <p
            className={styles.selectTitle}
            style={{
              marginTop: 14,
              fontSize: '1rem',
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '1.8px',
            }}
          >
            Сделанные ремонты
          </p>
          <Dropdown
            currentOption={index}
            className='mobileSelect'
            data={data.items.map((item) => item.title)}
            onChange={onDropdownChange}
          />
        </div>
        <MenuItems
          currentId={index}
          clickHandler={clickHandler}
          total={data.total}
          items={data.items}
        />
      </div>
      <div className={styles.content} id='slider'>
        <Slider
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
