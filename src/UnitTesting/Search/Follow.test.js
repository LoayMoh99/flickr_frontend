import React from "react";
import Follow from "../../components/Search/Follow"
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

describe("Follow button test", ()=>{

    let wrapper;
    beforeEach(() => {
    wrapper = shallow(<Follow/> ); 
    });

    describe("Component rendering", () => {   
        it("Should have an button", ()=>{
            const button= wrapper.find("button");
            expect(button).toHaveLength(1);
        })
        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.Handle");
            expect(wrapperdiv).toHaveLength(1);
        })
    })

});
