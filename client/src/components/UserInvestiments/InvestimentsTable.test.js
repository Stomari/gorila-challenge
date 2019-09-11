import React from 'react';
import { shallow } from 'enzyme';
import InvestimentsTable from './InvestimentsTable';

describe('InvestimentsTable rendering', () => {
  const mockInvestiment = [{
    _id: 1,
    type: 'fixa',
    value: 'R$100,00',
    date: '2019-09-01'
  }];
  const mockDelete = jest.fn()
  const component = shallow(<InvestimentsTable investimentInfo={mockInvestiment} deleteInvestiment={mockDelete} />); 

  it('should render', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render the table', () => {
    expect(component.find('table').length).toEqual(1);
  });

  it('should render investiment date', () => {
    expect(component.find('tr').last().find('td').at(0).text()).toEqual('2019-09-01');
  });

  it('should render investiment value', () => {
    expect(component.find('tr').last().find('td').at(1).text()).toEqual('R$100,00');
  });

  it('should render delete icon', () => {
    expect(component.find('.delete').length).toEqual(1);
  });

  it('should call delete function on delete icon click', () => {
    component.find('.delete').simulate('click');
    expect(mockDelete).toHaveBeenCalled();
  });
});