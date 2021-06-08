import React from "react";
import Join from "../../components/Search/Join"
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

describe("Join button test", ()=>{

    let wrapper;
    beforeEach(() => {
    wrapper = shallow(<Join/> ); 
    });

    describe("Component rendering", () => {   
        it("Should have an button", ()=>{
            const button= wrapper.find("button");
            expect(button).toHaveLength(1);
        })
        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.HandleJoin");
            expect(wrapperdiv).toHaveLength(1);
        })
    })

});
