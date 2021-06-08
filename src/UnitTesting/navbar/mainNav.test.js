import MainNav from "../../components/navbar/mainNav"
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});



describe("Displays User Information", ()=>{

    let wrapper;
    beforeEach(() => {
    wrapper = shallow(<MainNav /> ); 
    });

    describe("Component rendering", () => {   
        //for user Avatar and background
        it("Should have an image", ()=>{
            const image= wrapper.find("img");
            expect(image).toHaveLength(1);
        })
        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.container");
            expect(wrapperdiv).toHaveLength(1);
        })
    })

});
