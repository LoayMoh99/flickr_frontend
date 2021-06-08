import React from 'react';
import ReactDOM from 'react-dom';
import SideNavBar from '../../components/CameraRoll/SideNavBar';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('SideNavBar renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<SideNavBar/>, div);

});

it('SideNavBar renders correctly enzyme', () => {
    const wrapper = shallow(<SideNavBar/>)
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });