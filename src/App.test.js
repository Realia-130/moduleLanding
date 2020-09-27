import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import App from './App';

configure({ adapter: new Adapter() });

test('has app', () => {
  const wrapper = shallow(<App />);
  const div = wrapper.find('div');
  expect(div.text()).toBe('Hello World');
});
