import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/Header/Header';
import InvestimentForm from './components/InvestimentForm/InvestimentForm';
import PieChart from './components/PieChart/PieChart';
import UserInvestiments from './components/UserInvestiments/UserInvestiments';

const component = shallow(<App />); 

describe('App', () => {
  it('should render', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render header', () => {
    expect(component.find(Header).length).toEqual(1);
  });

  it('should render investiment form', () => {
    expect(component.find(InvestimentForm).length).toEqual(1);
  });

  it('should render pie chart', () => {
    expect(component.find(PieChart).length).toEqual(1);
  });

  it('should render user investiments', () => {
    expect(component.find(UserInvestiments).length).toEqual(1);
  });
});
