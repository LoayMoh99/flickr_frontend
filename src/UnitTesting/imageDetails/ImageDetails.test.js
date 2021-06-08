import GroupHeader from "../../components/imageDetails/imageDetails"
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});



describe("Displays the follower people by the user", ()=>{

    let wrapper;
    beforeEach(() => {
    wrapper = shallow(<ImageDetails /> ); 
    });

    describe("Component rendering", () => {   
        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.showedImage");
            expect(wrapperdiv).toHaveLength(1);
        })
        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("img");
            expect(wrapperdiv).toHaveLength(1);
        })
        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.restPhotoDetails");
            expect(wrapperdiv).toHaveLength(1);
        })
    })

});
