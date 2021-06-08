import React from "react";
import ImageGrid from "../../components/photostream/ImageGrid"
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});


describe("Image Cards test", ()=>{

    let wrapper;
    beforeEach(() => {
    wrapper = shallow(<ImageGrid /> ); 
    });

    describe("Component rendering", () => {   
        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.item");
            expect(wrapperdiv).toHaveLength(1);
        })
        it("Should have an image", ()=>{
            const image= wrapper.find("img");
            expect(image).toHaveLength(1);
        })
    })

});
