import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label className="sr-only" htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Book"
          id="search"
        />
        <button onClick={props.handleSearch} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;