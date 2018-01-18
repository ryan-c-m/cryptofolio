import App from "./App";
import { shallow } from "enzyme";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

describe("App", () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });
  it("renders without crashing", () => {
    let wrapper = shallow(<App />);
  });
});
