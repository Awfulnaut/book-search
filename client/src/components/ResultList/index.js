import React from "react";
import "./style.css";
// import API from "../utils/API";

function ResultList(props) {
  return (
    <div className="results">
      {props.books.map(book => (
        <div className="list-group-item result" key={book.id}>
          <div className="result__header">
            <h3 className="result__title">{book.title}</h3>
            <div className="result__buttons">
              <a target="_blank" href={book.link} className="btn btn-primary view">View</a>
              {props.currentPage === "search" ? 
                <button onClick={() => props.handleBookSave(book.id)} className="btn btn-primary save">Save</button> :
                <button onClick={() => props.handleDelete(book.id)} className="btn btn-danger save">Remove</button>
              }
                
            </div>
          </div>
          <p className="result__byline">
            Written by {book.authors}
          </p>
          <img
            alt={book.title} className="results__img"
            src={book.image ? book.image : 'http://placehold.it/128x195'} />
          <p className="results__description">
            {book.description ? book.description : "No description available"}
          </p>
          <div className="clearfix"></div>
        </div>
      ))}
    </div>
  );
}

export default ResultList;