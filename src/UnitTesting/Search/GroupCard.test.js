import React from "react";
import GroupCard from "../../components/Search/GroupCard"
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

describe("Group Card test", ()=>{

    let wrapper;
    beforeEach(() => {
    wrapper = shallow(<GroupCard/> ); 
    });

    describe("Component rendering", () => {   
        it("Should have an Avatar div", ()=>{
            const div= wrapper.find("div.groupAvatar");
            expect(div).toHaveLength(1);
        })
        it("Should have an Group info", ()=>{
            const div= wrapper.find("div.groupInfo");
            expect(div).toHaveLength(1);
        })

        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.cardGroup");
            expect(wrapperdiv).toHaveLength(1);
        })
    })

});