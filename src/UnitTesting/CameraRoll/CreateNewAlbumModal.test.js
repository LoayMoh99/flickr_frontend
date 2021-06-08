import React from 'react';
import ReactDOM from 'react-dom';
import CreateNewAlbumModal from '../../components/CameraRoll/CreateNewAlbumModal';
import Enzyme, { shallow, mount } from 'enzyme';
import {render, fireEvent, cleanup} from '@testing-library/react';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

afterEach(cleanup)

it('CreateNewAlbumModal renders without crashing', ()=>{
    const dummy= ()=>{ return 1;}
    const div = document.createElement('div');
    ReactDOM.render(<CreateNewAlbumModal 
        onRequestCreateClose={dummy}
        imgIdsCreateAlbum= "[1,2]" 
       />, div);

});

it('CreateNewAlbumModal renders correctly enzyme', () => {
    const dummy= ()=>{ return 1;}
    const wrapper = shallow(<CreateNewAlbumModal 
        onRequestCreateClose={dummy}
        imgIdsCreateAlbum= "[1,2]"
       />)
       expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Inputing Album name the state', () => {
        const dummy =()=>{return 1;};
        const { getByPlaceholderText} = render(<CreateNewAlbumModal 
            onRequestCreateClose={dummy}
            imgIdsCreateAlbum= "[1,2]"
           />);
    
        expect(getByPlaceholderText("Album name").value).toBe("")
    
        fireEvent.change(getByPlaceholderText("Album name"), {target: {value: 'Text' } } )
    
        expect(getByPlaceholderText("Album name").value).not.toBe("")
     })

     it('Inputing Album description the state', () => {
        const dummy =()=>{return 1;};
        const { getByPlaceholderText} = render(<CreateNewAlbumModal 
            onRequestCreateClose={dummy}
            imgIdsCreateAlbum= "[1,2]"
           />);
    
        expect(getByPlaceholderText("Description (optional)").value).toBe("")
    
        fireEvent.change(getByPlaceholderText("Description (optional)"), {target: {value: 'Text' } } )
    
        expect(getByPlaceholderText("Description (optional)").value).not.toBe("")
     })
    