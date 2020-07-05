import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';

const Dropdown = ({ data, onChange, className, currentOption }) => {
  return (
    <div className={className}>
      <select
        value={currentOption}
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
  className: PropTypes.string,
  currentOption: PropTypes.number.isRequired,
};

export default Dropdown;
