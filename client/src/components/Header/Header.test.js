import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  const component = shallow(<Header />);

  it('should render', () => {
    expect(component).toMatchSnapshot();
  });
  it('should render the logo', () => {
    expect(component.find('.logo').length).toEqual(1)
  })
});