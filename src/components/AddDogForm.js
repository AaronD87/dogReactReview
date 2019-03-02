import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './AddDogForm.css';

class AddDogForm extends PureComponent {
  static propTypes = {
    addDog: PropTypes.func.isRequired
  };

  state = {
    name: '',
    age: '',
    weight: ''
  };
  
  handleSubmit = event => {
    event.preventDefault();
    this.myRef = React.createRef();
    const { name, age, weight } = this.state;
    this.props.addDog({ name, age: Number.parseInt(age), weight });
  };

  updateInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { name, age, weight } = this.state;
    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <span>Name: </span>
          <input className={styles.input} type='text' name='name' value={name} onChange={this.updateInput} />
          <span>Age: </span>
          <input className={styles.input} type='number' name='age' value={age} onChange={this.updateInput} />
          <span>Weight: </span>
          <input className={styles.input} type='text' name='weight' value={weight} onChange={this.updateInput} />
          <button className={styles.button} type='submit'>Add Dog</button>
        </form>
      </>
    );
  }
}

export default AddDogForm;
