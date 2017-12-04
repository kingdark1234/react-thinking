
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Counter from '../Counter.component';
describe('Counter component', () => {
  it('add: should increment state', () => {
    const wrapper = shallow(<Counter />);
    const instance = wrapper.instance();
    expect(instance.state.count).toBe(0);
    instance.add();
    expect(instance.state.count).toBe(1);
  });
  it('substract: should decrease state', () => {
    const wrapper = shallow(<Counter />);
    const instance = wrapper.instance();
    expect(instance.state.count).toBe(0);
    instance.subtract();
    expect(instance.state.count).toBe(-1);
  });
});