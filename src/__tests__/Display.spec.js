import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });

  it('should render a div with classname component-display', () => {
    const wrapper = shallow(<Display />);
    const div = wrapper.find('.component-display');
    expect(div.length).toBeGreaterThan(0);
  })
  
  it('should render expected value', () => {
    const value = '5';
    const wrapper = shallow(<Display value={value} />);
    const div = wrapper.find('.component-display');
    expect(div.text()).toEqual('5');
  })
});

