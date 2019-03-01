import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dog.css';

export default function Dog({ age, name, weight }) {
  return (
    <>
      <h2 className={styles.dogName}>{name}</h2>
      <p className={styles.dogAge}>Age: {age} years old</p>
      <p className={styles.dogWeight}>Weight: {weight}</p>
    </>
  );
}


Dog.propTypes = {
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
};
