import React from 'react';
import ReactDOM from 'react-dom';
import ImagesCR from '../../components/CameraRoll/ImagesCR';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('ImagesCR renders without crashing', ()=>{
    const dummy =()=>{return 1;};
    const div = document.createElement('div');
    ReactDOM.render( <ImagesCR
         key="1"
         url="https://picsum.photos/600/200?random=2"
         image="{_id:1}"
         onEdit={dummy}
        />, div);

});

it('ImagesCR renders correctly enzyme', () => {
    const dummy =()=>{return 1;};
    const wrapper = shallow( <ImagesCR
        key="1"
        url="https://picsum.photos/600/200?random=2"
        image="{_id:1}"
        onEdit={dummy}
       />,)
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });


  it("ImagesCR Should have an image", ()=>{
    const dummy =()=>{return 1;};
    const wrapper = shallow( <ImagesCR
        key="1"
        url="https://picsum.photos/600/200?random=2"
        image="{_id:1}"
        onEdit={dummy}
       />,)
    const image= wrapper.find("img");
    expect(image).toHaveLength(1);
})