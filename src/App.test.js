import { render, waitFor } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("AppComponent", () => {
  it("renders collection list when data is available", async () => {
    const mockedData = [
      {
        collectionId: 1440854851,
        collectionName: "Sleep Through the Static",
        artworkUrl100: "",
      },
    ];
    const mockedResponse = {
      json: jest.fn().mockResolvedValueOnce(mockedData),
    };

    const mockedFetch = jest.fn().mockResolvedValueOnce(mockedResponse);
    global.fetch = mockedFetch;
    const { getByTestId } = render(<App />);
    const element = await waitFor(() => getByTestId("collection-list"));
    expect(element).toBeInTheDocument();
    expect(mockedFetch).toBeCalledTimes(1);
    expect(mockedResponse.json).toBeCalledTimes(1);
  });

  it("renders loading text when data is not null", async () => {
    const mockedData = null;
    const mockedResponse = {
      json: jest.fn().mockResolvedValueOnce(mockedData),
    };

    const mockedFetch = jest.fn().mockResolvedValueOnce(mockedResponse);
    global.fetch = mockedFetch;
    const { getByTestId } = render(<App />);
    const element = await waitFor(() => getByTestId("loading"));
    expect(element).toBeInTheDocument();
  });
});
