import React from 'react';
import { shallow } from 'enzyme';
import Dogs from './Dogs';

describe('Dogs', () => {
  it('renders the Dogs component', () => {
    const dogs = [{ name: 'Billy', age: 12, weight: '70 lbs' }];
    const wrapper = shallow(<Dogs dogs={ [...dogs] }/>);

    expect(wrapper).toMatchSnapshot();
  });
});
