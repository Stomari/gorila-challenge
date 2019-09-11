import React from 'react';
import { shallow } from 'enzyme';
import UserInvestiments from './UserInvestiments';

describe('UserInvestiments rendering', () => {
  const component = shallow(<UserInvestiments />); 

  it('should render', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render investiments', () => {
    expect(component.find('.investiments').length).toEqual(1);
  });

  it('should render fixed and variable investiments table', () => {
    expect(component.find('.invest-table').length).toEqual(2);
  });
});