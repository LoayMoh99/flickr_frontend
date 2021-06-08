import React from 'react';
import ReactDOM from 'react-dom';
import DropdownPrivacy from '../../components/CameraRoll/DropdownPrivacy';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('DropdownPrivacy renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<DropdownPrivacy 
        imgEditIds="[1,2]"
        />, div);

});

it('DropdownPrivacy renders correctly enzyme', () => {
    const wrapper = shallow(<DropdownPrivacy 
        imgEditIds="[1,2]"
        />)
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });

