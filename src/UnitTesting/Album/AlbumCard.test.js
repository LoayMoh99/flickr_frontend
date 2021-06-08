import React from "react";
import AlbumCard from "../../components/Album/AlbumCard"
// import { render, fireEvent, getByTestId} from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});


describe("Album preview card test", ()=>{

    let wrapper;
    beforeEach(() => {
    wrapper = shallow(<AlbumCard /> ); 
    });

    describe("Component rendering", () => {   
        it("Should have an image", ()=>{
            const image= wrapper.find("img");
            expect(image).toHaveLength(1);
        })
        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.album-overview");
            expect(wrapperdiv).toHaveLength(1);
        })
        it("Should render the information div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.album-info");
            expect(wrapperdiv).toHaveLength(1);
        })
    })

    // describe("Testing functions", () => {   
    //     it('should test the delete album button', () => {
    //       const { container } = render(<AlbumCard />);
    //       const isModalOpen = getByTestId(container, "isModalOpen");
    //       expect(isModalOpen.textContent).toBe(false);
    //       wrapper.find('button#open-button').simulate('click');
    //       expect(isModalOpen.textContent).toBe(true);
    //     })
    //   })

});
