import React from "react";
import "./style.css";

function ResultList(props) {
  return (
    <div className="results">
      {props.results.map(result => (
        <div className="list-group-item result" key={result.id}>
          <div className="result__header">
            <h2 className="result__title">{result.volumeInfo.title}</h2>
            <div className="result__buttons">
              <a target="_blank" href={result.volumeInfo.infoLink} className="btn btn-primary view">View</a>
              <button className="btn btn-primary save">Save</button>
            </div>
          </div>
          <p className="result__byline">
            Written by {result.volumeInfo.authors}
          </p>
          <img
            alt={result.volumeInfo.title} className="results__img"
            src={result.volumeInfo.imageLinks.thumbnail ? result.volumeInfo.imageLinks.thumbnail : 'http://placehold.it/128x195'} />
          <p className="results__description">
            {result.volumeInfo.description ? result.volumeInfo.description : "No description available"}
          </p>
          <div className="clearfix"></div>
        </div>
      ))}
    </div>
  );
}

export default ResultList;
