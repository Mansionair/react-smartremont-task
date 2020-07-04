import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';

const Dropdown = ({ data, onChange }) => {
  return (
    <div>
      <select
        className={styles.select}
        onChange={(e) => {
          onChange(parseInt(e.target.value));
        }}
      >
        {data.map((option, i) => (
          <option key={i} value={i}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
