import React from 'react';
import ReactDOM from 'react-dom';
import AddModal from '../../components/CameraRoll/AddModal';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('AddModal renders without crashing', ()=>{
    const dummy =()=>{return 1;};
    const div = document.createElement('div');
    ReactDOM.render(<AddModal
        onRequestAddClose={dummy}
        onRequestCreate={dummy}
        imgAdd="[{_id:1},{_id:2}]"
        imgAddIds= "[1,2]"
        countAdd="2"  
        />, div);

});

it('AddModal renders correctly enzyme', () => {
    const dummy =()=>{return 1;};
    const wrapper = shallow(<AddModal
        onRequestAddClose={dummy}
        onRequestCreate={dummy}
        imgAdd="[{_id:1},{_id:2}]"
        imgAddIds= "[1,2]"
        countAdd="2"  
        />)
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });
