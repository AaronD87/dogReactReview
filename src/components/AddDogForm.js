import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './AddDogForm.css';

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
        <form onSubmit={this.handleSubmit}>
          <span>Name: </span>
          <input type='text' name='name' value={name} onChange={this.updateInput} />
          <span>Age: </span>
          <input type='number' name='age' value={age} onChange={this.updateInput} />
          <span>Weight: </span>
          <input type='text' name='weight' value={weight} onChange={this.updateInput} />
          <button type='submit'>Add Dog</button>
        </form>
      </>
    );
  }
}

export default AddDogForm;
