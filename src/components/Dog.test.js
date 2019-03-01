import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Dog', () => {
  it('renders the Dog component', () => {
    const wrapper = shallow(<Dog age={12} name={'Billy'} weight={'70 lbs'} />);

    expect(wrapper).toMatchSnapshot();
  });
});
