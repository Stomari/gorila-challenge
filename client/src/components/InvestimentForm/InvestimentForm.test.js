import React from 'react';
import { shallow } from 'enzyme';
import InvestimentForm from './InvestimentForm';

describe('InvestimentForm', () => {
  const component = shallow(<InvestimentForm />);

  it('should render', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render form', () => {
    expect(component.find('form').length).toEqual(1);
  });

  it('form should have onSubmit props', () => {
    expect(component.find('form').prop('onSubmit')).toEqual(expect.any(Function));
  });

  it('should render type selector', () => {
    expect(component.find('select[name="type"]').length).toEqual(1);
  });

  it('should render value input', () => {
    expect(component.find('input[name="value"]').length).toEqual(1);
  });

  it('should render date input', () => {
    expect(component.find('input[name="date"]').length).toEqual(1);
  });

  it('should render submit button', () => {
    expect(component.find('button[type="submit"]').length).toEqual(1);
  });
});
