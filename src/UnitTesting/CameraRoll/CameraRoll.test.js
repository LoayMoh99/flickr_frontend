import React from 'react';
import ReactDOM from 'react-dom';
import CamreRoll, {handleIncrement, handleDecrement, handleDelete, containsObject} from '../../components/CameraRoll/CamreRoll';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })



test('the handleIncrement method increments count', () => {
  let c = handleIncrement(1)
  expect(c).toEqual(2)
})

test('the handleDecrement method decrements count', () => {
    let c = handleDecrement(2)
    expect(c).toEqual(1)
  })

  test('the handleDelete method deletes from array', () => {
    const array = [1,2,3]
    let arrReturned = handleDelete(3,array)
    expect(arrReturned).toEqual([3])
  })

  test('the containsObject method checks for an element in the array', () => {
      const list = [{_id:1},{_id:2}];
      const obj = {_id:1};
    let c = containsObject(obj,list);
    expect(c).toBeTruthy();
  })
  test('the containsObject method checks for an element is not in the array', () => {
    const list = [{_id:1},{_id:2}];
    const obj = {_id:3};
  let c = containsObject(obj,list);
  expect(c).toBeFalsy();
})
 
it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<CamreRoll />, div);

});

it('CameraRoll renders correctly enzyme', () => {
  const wrapper = shallow(<CamreRoll />)

  expect(toJson(wrapper)).toMatchSnapshot();
});