import React from 'react';
import { shallow } from 'enzyme';
import AddDogForm from './AddDogForm';


describe('<AddDogForm />', () => {
  it('renders', () => {
    const wrapper = shallow(<AddDogForm addDog={jest.fn()} />);
    
    expect(wrapper.exists()).toBe(true);
  });

  it('echos user text and form submit is called with user inputs', () => {
    const addDog = jest.fn();
    const wrapper = shallow(<AddDogForm addDog={addDog} />);

    wrapper.find('input').at(0).simulate('change', {
      target: { 
        value: 'Pete',
        name: 'name'   }
    });

    wrapper.find('input').at(1).simulate('change', {
      target: { 
        value: '12',
        name: 'age'   }
    });

    wrapper.find('input').at(2).simulate('change', {
      target: { 
        value: '70 lbs',
        name: 'weight'   }
    });

    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });

    expect(wrapper.state('name')).toEqual('Pete');
    expect(wrapper.state('age')).toEqual('12');
    expect(wrapper.state('weight')).toEqual('70 lbs');

    expect(addDog).toHaveBeenCalledWith({
      name: 'Pete',
      age: 12,
      weight: '70 lbs'
    });
  });

  it('matches a snapshot for AddDogForm', () => {
    const wrapper = shallow(<AddDogForm addDog={jest.fn()}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
