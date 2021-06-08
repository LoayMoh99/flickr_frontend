import React from "react";
import SearchGroup from "../../components/Search/SearchGroup"
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
// jest.mock('react-router-dom', () => ({
//         useParams: jest.fn().mockReturnValue({ text: ' ' }),
//         }));
describe("SearchGroup test", ()=>{
    
    let wrapper;
    beforeEach(() => {
    wrapper = shallow(<SearchGroup/> ); 
    });
    
    describe("Component rendering", () => {   
        it("Should have a Search Group container div", ()=>{
            const div= wrapper.find("div.SearchPeople-cont");
            expect(div).toHaveLength(1);
        })

        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.SearchPeople");
            expect(wrapperdiv).toHaveLength(1);
        })
    

})

});