import React from "react";
import { render, screen } from "@testing-library/react";
import CollectionList from "./CollectionList";

describe("CollectionList", () => {
  it("should render with correct pro", () => {
    const props = {
      albums: [
        {
          collectionId: "12356646",
          collectionName: "Sleep Through the Static",
          artworkUrl100: "http://example.com",
        },
      ],
    };
    render(<CollectionList {...props} />);
    expect(screen.getByTestId("collection-list")).toBeInTheDocument();
  });
});
