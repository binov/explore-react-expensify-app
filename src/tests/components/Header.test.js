import React from 'react';
import { shallow } from 'enzyme';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
//import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';
import { TestScheduler } from 'rxjs';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();

   // expect(wrapper.find('h1').text()).toBe('Expensify');

  // expect(toJSON(wrapper)).toMatchSnapshot();

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // //console.log(renderer.getRenderOutput());
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});


test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});