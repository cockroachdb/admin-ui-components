import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "src/protobufInit";
import "src/reduxStore/state";

Enzyme.configure({ adapter: new Adapter() });
