import React from 'react';
import ReactDOM from 'react-dom';
import ImagesMM from '../../components/CameraRoll/ImagesMM';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('ImagesMM renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<ImagesMM
        url="https://picsum.photos/600/200?random=2"
      />, div);


});

it('ImagesMM renders correctly enzyme', () => {
    const wrapper = shallow(<ImagesMM
        url="https://picsum.photos/600/200?random=2"
      />,)
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("ImagesMM Should have an image", ()=>{
    const wrapper = shallow(<ImagesMM
        url="https://picsum.photos/600/200?random=2"
      />,)
    const image= wrapper.find("img");
    expect(image).toHaveLength(1);
})