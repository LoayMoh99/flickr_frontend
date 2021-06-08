import React from "react";
import EditInfo from "../../components/photostream/EditInfo"
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});


describe("Edit image cards' grid test", ()=>{

    let wrapper;
    beforeEach(() => {
    wrapper = shallow(<EditInfo /> ); 
    });

    describe("Component rendering", () => {   
        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.card-grid");
            expect(wrapperdiv).toHaveLength(1);
        })
    })

});
