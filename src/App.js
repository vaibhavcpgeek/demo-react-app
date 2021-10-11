import React, { useState, useEffect } from "react";
import getAlbums from "./service";
import CollectionList from "./components/CollectionList/CollectionList";
import "./App.css";

function App() {
  const [albums, setAlbums] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchAlbums = async () => {
      const data = await getAlbums();
      const filteredData = data.filter((item) =>
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
        <CollectionList collections={albums} />
      </section>
    </div>
  );
}

export default App;
