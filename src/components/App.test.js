import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders the App', () => {
    const dogs = [{ age: 12, name: 'Billy', weight: '70 lbs' }];
    const wrapper = shallow(<App dogs={ dogs } />);

    expect(wrapper).toMatchSnapshot();
  });
});
