// import React from "react";
import Card from "../../components/photostream/Card"
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});


describe("Album preview card test", ()=>{

    let wrapper;
    beforeEach(() => {
    wrapper = shallow(<Card /> ); 
    });

    describe("Component rendering", () => {   
        it("Should have an image", ()=>{
            const image= wrapper.find("img");
            expect(image).toHaveLength(1);
        })
        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.card");
            expect(wrapperdiv).toHaveLength(1);
        })
        it("Should render the interaction div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.interaction-bar");
            expect(wrapperdiv).toHaveLength(1);
        })
    })

});
