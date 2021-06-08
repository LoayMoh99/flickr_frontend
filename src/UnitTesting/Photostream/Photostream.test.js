import React from "react";
import PhotoStream from "../../components/photostream/Photostream"
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});


describe("Image grid test", ()=>{

    let wrapper;
    beforeEach(() => {
    wrapper = shallow(<PhotoStream /> ); 
    });

    describe("Component rendering", () => {   
        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.grid");
            expect(wrapperdiv).toHaveLength(1);
        })

    })

    

});
