import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/Header/Header';
import InvestmentForm from './components/InvestmentForm/InvestmentForm';
import PieChart from './components/PieChart/PieChart';
import UserInvestments from './components/UserInvestments/UserInvestments';

const component = shallow(<App />); 

describe('App', () => {
  it('should render', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render header', () => {
    expect(component.find(Header).length).toEqual(1);
  });

  it('should render investment form', () => {
    expect(component.find(InvestmentForm).length).toEqual(1);
  });

  it('should render pie chart', () => {
    expect(component.find(PieChart).length).toEqual(1);
  });

  it('should render user investments', () => {
    expect(component.find(UserInvestments).length).toEqual(1);
  });
});
