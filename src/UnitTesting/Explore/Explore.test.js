import React from "react";
import Pictures from "../../components/Explore/Pictures"
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});


describe("display public photos test", ()=>{

    let wrapper;
    beforeEach(() => {
    wrapper = shallow(<Pictures /> ); 
    });

    describe("Component rendering", () => {   
        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.grid");
            expect(wrapperdiv).toHaveLength(1);
        })

    })

    

});
