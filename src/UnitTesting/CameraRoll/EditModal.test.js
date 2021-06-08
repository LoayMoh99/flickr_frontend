import React from 'react';
import ReactDOM from 'react-dom';
import EditModal from '../../components/CameraRoll/EditModal';
import Enzyme, { shallow,mount } from 'enzyme';
import {render, fireEvent, cleanup, getByPlaceholderText} from '@testing-library/react';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

afterEach(cleanup)

it('EditModal renders without crashing', ()=>{
    const dummy =()=>{return 1;};
    const div = document.createElement('div');
    ReactDOM.render(<EditModal
        onRequestEditClose={dummy}
        imgEdit="[{_id:1},{_id:2},{_id:3}]"
        imgEditIds= "[1,2,3]"
        countEdit="3"
        />, div);

});

it('EditModal renders correctly enzyme', () => {
    const dummy =()=>{return 1;};
    const wrapper = shallow(<EditModal
        onRequestEditClose={dummy}
        imgEdit="[{_id:1},{_id:2},{_id:3}]"
        imgEditIds= "[1,2,3]"
        countEdit="3"
        />)
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });


  it('Inputing photo title updates the state', () => {
    const dummy =()=>{return 1;};
    const { getByPlaceholderText} = render(<EditModal
        onRequestEditClose={dummy}
        imgEdit="[{_id:1},{_id:2},{_id:3}]"
        imgEditIds= "[1,2,3]"
        countEdit="3"
        />);

    expect(getByPlaceholderText("Change title").value).toBe("")

    fireEvent.change(getByPlaceholderText("Change title"), {target: {value: 'Text' } } )

    expect(getByPlaceholderText("Change title").value).not.toBe("")
 })

 it('Inputing photo description updates the state', () => {
    const dummy =()=>{return 1;};
    const { getByPlaceholderText} = render(<EditModal
        onRequestEditClose={dummy}
        imgEdit="[{_id:1},{_id:2},{_id:3}]"
        imgEditIds= "[1,2,3]"
        countEdit="3"
        />);

    expect(getByPlaceholderText("Change description").value).toBe("")

    fireEvent.change(getByPlaceholderText("Change description"), {target: {value: 'Text' } } )

    expect(getByPlaceholderText("Change description").value).not.toBe("")
 })

 it('Inputing new tags updates the state', () => {
    const dummy =()=>{return 1;};
    const { getByPlaceholderText} = render(<EditModal
        onRequestEditClose={dummy}
        imgEdit="[{_id:1},{_id:2},{_id:3}]"
        imgEditIds= "[1,2,3]"
        countEdit="3"
        />);

    expect(getByPlaceholderText("Add new tags").value).toBe("")

    fireEvent.change(getByPlaceholderText("Add new tags"), {target: {value: 'Text' } } )

    expect(getByPlaceholderText("Add new tags").value).not.toBe("")
 })

 it('Inputing new people updates the state', () => {
    const dummy =()=>{return 1;};
    const { getByPlaceholderText} = render(<EditModal
        onRequestEditClose={dummy}
        imgEdit="[{_id:1},{_id:2},{_id:3}]"
        imgEditIds= "[1,2,3]"
        countEdit="3"
        />);

    expect(getByPlaceholderText("Add new people").value).toBe("")

    fireEvent.change(getByPlaceholderText("Add new people"), {target: {value: 'Text' } } )

    expect(getByPlaceholderText("Add new people").value).not.toBe("")
 })
