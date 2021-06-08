import React from 'react';
import ReactDOM from 'react-dom';
import AlbumCoverPhoto from '../../components/Album/AlbumCoverPhoto';
import Enzyme, { shallow, mount } from 'enzyme';
import {render, fireEvent, cleanup} from '@testing-library/react';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

afterEach(cleanup)

it('AlbumCoverPhoto renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<AlbumCoverPhoto 
        coverPhoto = "https://picsum.photos/600/200?random=2"
        title = "Title"
        description = "Description"
        photos = "[{_id:1},{_id:2}]"
        ownerFname ="Khadija"
        ownerLname ="Khaled"
        album_id = "1"
        isUser = "true"
        />, div);

});

it('AlbumCoverPhoto renders correctly enzyme', () => {
    const wrapper = shallow(<AlbumCoverPhoto 
        coverPhoto = "https://picsum.photos/600/200?random=2"
        title = "Title"
        description = "Description"
        photos = "[{_id:1},{_id:2}]"
        ownerFname ="Khadija"
        ownerLname ="Khaled"
        album_id = "1"
        isUser = "true"
        />)
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Inputing title updates the state', () => {
    const { getByDisplayValue} = render(<AlbumCoverPhoto 
        coverPhoto = "https://picsum.photos/600/200?random=2"
        title = "Title"
        description = "Description"
        photos = "[{_id:1},{_id:2}]"
        ownerFname ="Khadija"
        ownerLname ="Khaled"
        album_id = "1"
        isUser = "true"
        />);

    expect(getByDisplayValue(/Title/i).value).toBe("Title")

    fireEvent.change(getByDisplayValue("Title"), {target: {value: 'TextTitle' } } )

    expect(getByDisplayValue(/TextTitle/i).value).not.toBe("Title")
 })

 it('Inputing description updates the state', () => {
    const { getByDisplayValue} = render(<AlbumCoverPhoto 
        coverPhoto = "https://picsum.photos/600/200?random=2"
        title = "Title"
        description = "Description"
        photos = "[{_id:1},{_id:2}]"
        ownerFname ="Khadija"
        ownerLname ="Khaled"
        album_id = "1"
        isUser = "true"
        />);

    expect(getByDisplayValue(/Description/i).value).toBe("Description")

    fireEvent.change(getByDisplayValue("Description"), {target: {value: 'TextDescription' } } )

    expect(getByDisplayValue(/TextDescription/i).value).not.toBe("Description")
 })