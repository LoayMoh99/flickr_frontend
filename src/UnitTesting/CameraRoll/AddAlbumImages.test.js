import React from 'react';
import ReactDOM from 'react-dom';
import AddAlbumImages from '../../components/CameraRoll/AddAlbumImages';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })



it('AddAlbumImages renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<AddAlbumImages 
        albumCover = "https://picsum.photos/600/200?random=2"
        albumTitle = "Title"
        albumId = "1"
        albumPhotos = "[{_id:1},{_id:2}]"
        imgAddIds = "[1,2]"
       />, div);

});

it('AddAlbumImages renders correctly enzyme', () => {
    const wrapper = shallow(<AddAlbumImages 
        albumCover = "https://picsum.photos/600/200?random=2"
        albumTitle = "Title"
        albumId = "1"
        albumPhotos = "[{_id:1},{_id:2}]"
        imgAddIds = "[1,2]"
       />)
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });