import React from "react";
import SearchPeople from "../../components/Search/SearchPeople"
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
// jest.mock('react-router-dom', () => ({
//         useParams: jest.fn().mockReturnValue({ text: ' ' }),
//         }));
describe("SearchPeople test", ()=>{
    
    let wrapper;
    beforeEach(() => {
    wrapper = shallow(<SearchPeople/> ); 
    });
    
    describe("Component rendering", () => {   
        it("Should have a Search People container div", ()=>{
            const div= wrapper.find("div.SearchPeople-cont");
            expect(div).toHaveLength(1);
        })

        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.SearchPeople");
            expect(wrapperdiv).toHaveLength(1);
        })
    

})

});