import React, { useState, useEffect } from "react";
import getAlbums from "./service";
import CollectionList from "./components/CollectionList/CollectionList";
import "./App.css";

function App() {
  const [albums, setAlbums] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchAlbums = async () => {
      const data = await getAlbums();
      const filteredData = data?.filter((item) =>
        item.collectionName.toLowerCase().includes(searchText.toLowerCase())
      );
      setAlbums(filteredData);
    };
    fetchAlbums();
  }, [searchText]);

  const handleOnChange = (e) => {
    const str = e.target.value;
    setSearchText(str);
  };

  return (
    <div className="App">
      <section className="container">
        <input
          type="text"
          className="search"
          value={searchText}
          onChange={handleOnChange}
          placeholder="Search album"
        />
        {albums ? (
          <CollectionList collections={albums} />
        ) : (
          <p data-testid="not-found">
            *Please start the server at port 4000 before running this
            application
          </p>
        )}
      </section>
    </div>
  );
}

export default App;
