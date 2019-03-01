import React from 'react';
import PropTypes from 'prop-types';

export default function Dog({ age, name, weight }) {
  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years old</p>
      <p>Weight: {weight}</p>
    </>
  );
}


Dog.propTypes = {
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
};
