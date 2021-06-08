import Upload from "../../components/upload/Upload"
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});



describe("Displays Uploading new photo", ()=>{

    let wrapper;
    beforeEach(() => {
    wrapper = shallow(<Upload /> ); 
    });

    describe("Component rendering", () => {   
        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.logoPlusNav");
            expect(wrapperdiv).toHaveLength(1);
        })
        it("Should render the wrapper div correctly", ()=>{
            const wrapperdiv= wrapper.find("div.uploadText");
            expect(wrapperdiv).toHaveLength(1);
        })
    })

});
