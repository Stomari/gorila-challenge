import React from 'react';
import { shallow } from 'enzyme';
import UserInvestments from './UserInvestments';

describe('UserInvestments rendering', () => {
  const component = shallow(<UserInvestments />); 

  it('should render', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render investments', () => {
    expect(component.find('.investments').length).toEqual(1);
  });

  it('should render fixed and variable investments table', () => {
    expect(component.find('.invest-table').length).toEqual(2);
  });
});