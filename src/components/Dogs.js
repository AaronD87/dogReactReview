import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';
import styles from './Dogs.css';

export default function Dogs({ dogs }) {
  const listOfDogs = dogs.map((dog, idx) => {
    return <li className={styles.li} key={idx}><Dog name={dog.name} age={dog.age} weight={dog.weight}/></li>;
  });
  return (
    <ul className={styles.ul}>
      {listOfDogs}
    </ul>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};
