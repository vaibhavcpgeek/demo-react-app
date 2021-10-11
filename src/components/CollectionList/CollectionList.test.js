import React from "react";
import { shallow } from "enzyme";
import CollectionList from "./CollectionList";

describe("CollectionList", () => {
  it("should render correctly", () => {
    const props = {
      albums: [
        {
          collectionId: "",
          collectionName: "",
          artworkUrl100: "",
        },
      ],
    };
    const component = shallow(<CollectionList {...props} />);

    expect(component).toMatchSnapshot();
  });
});
