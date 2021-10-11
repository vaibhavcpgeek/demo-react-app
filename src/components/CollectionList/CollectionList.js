import React from "react";
import "./CollectionList.css";

const CollectionList = ({ collections }) => {
  return (
    <ul data-testid="collection-list">
      {collections?.map((item) => {
        return (
          <li key={item.collectionId} className="row card">
            <div className="col-3">
              <img src={item.artworkUrl100} alt="album" />
            </div>
            <div className="col-9">
              <p>{item.collectionName}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CollectionList;
