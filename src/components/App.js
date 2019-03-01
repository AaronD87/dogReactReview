import React, { PureComponent } from 'react';
import AddDogForm from './AddDogForm';
import Dogs from './Dogs';
// import styles from './App.css';

class MyClass extends PureComponent {
  state = {
    dogs: []
  };

  addDog = dog => {
    this.setState(state => ({
      dogs: [...state.dogs, dog]
    }));
  };

  render() {
    const { dogs } = this.state;

    return (
      <div >
        <h1>Dogs</h1>
        <div >
          <AddDogForm addDog={this.addDog}/>

          <Dogs
            dogs={dogs}
          />

        </div>
      </div>
    );
  }
}

export default MyClass;

