import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("AppComponent", () => {
  it("should render correctly", () => {
    const component = shallow(<App debug />);

    expect(component).toMatchSnapshot();
  });
});
