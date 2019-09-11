import React from 'react';
import { shallow } from 'enzyme';
import PieChart from './PieChart';


describe('PieChart rendering without props', () => {
  const component = shallow(<PieChart fixedIncome={[]} variableIncome={[]} />);

  it('should render', () => {
    expect(component).toMatchSnapshot();
  });
  
  it('should render form', () => {
    expect(component.type()).toEqual(null);
  });
});


describe('PieChart rendering with props', () => {
  const mockFixed = [{
    type: 'fixa',
    value: 'R$100,00',
    date: '2019-09-01'
  }];
  const mockVariable = [{
    type: 'variavel',
    value: 'R$200,00',
    date: '2019-09-02'
  }]
  const component = shallow(<PieChart fixedIncome={mockFixed} variableIncome={mockVariable} />);

  it('should render', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render .pie-chart', () => {
    expect(component.find('.pie-chart').length).toEqual(1);
  });

  it('should render .pie-info', () => {
    expect(component.find('.pie-info').length).toEqual(1);
  });

  it('should render correct fixed investments percentage', () => {
    expect(component.find('.fixed-percentage').text()).toEqual('50% da carteira em renda fixa');
  });

  it('should render correct variable investments percentage', () => {
    expect(component.find('.variable-percentage').text()).toEqual('50% da carteira em renda variável');
  });

  it('should render pie chart', () => {
    expect(component.find('.chart').length).toEqual(1);
  });

  it('pie chart should have data props', () => {
    expect(component.find('.chart').prop('data')).toEqual([
      {
        title: 'fixed income',
        value: 50,
        color: '#50c2c5'
      },
      {
        title: 'variable income',
        value: 50,
        color: '#6ade92'
      },
    ]);
  });
});