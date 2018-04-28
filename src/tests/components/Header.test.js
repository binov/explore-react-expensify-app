import React from 'react';
import { shallow } from 'enzyme';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
//import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';
import { TestScheduler } from 'rxjs';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();

   // expect(wrapper.find('h1').text()).toBe('Expensify');

  // expect(toJSON(wrapper)).toMatchSnapshot();

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // //console.log(renderer.getRenderOutput());
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});