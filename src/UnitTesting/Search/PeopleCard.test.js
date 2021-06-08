import React from "react";
import PeopleCard from "../../components/Search/PeopleCard"
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

describe("People Card test", ()=>{

    let wrapper;
    beforeEach(() => {
    wrapper = shallow(<PeopleCard/> ); 
    });

    describe("Component rendering", () => {   
        it("Should have an Avatar div", ()=>{
            const button= wrapper.find("div.peopleAvatar");
            expect(button).toHaveLength(1);
        })
        it("Should have an People info", ()=>{
            const button= wrapper.find("div.peopleInfo");
            expect(button).toHaveLength(1);
        })

        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.cardPeople");
            expect(wrapperdiv).toHaveLength(1);
        })
    })

});