import GroupHeader from "../../components/groupHeader/GroupHeader"
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});



describe("Displays the follower people by the user", ()=>{

    let wrapper;
    beforeEach(() => {
    wrapper = shallow(<GroupHeader /> ); 
    });

    describe("Component rendering", () => {   
        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("div#groupNameAndButtton");
            expect(wrapperdiv).toHaveLength(1);
        })
        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("img");
            expect(wrapperdiv).toHaveLength(1);
        })
    })

});
