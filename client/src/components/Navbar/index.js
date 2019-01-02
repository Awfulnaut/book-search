import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" className="navbar-brand">
        Google Books
      </Link>
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/search"
          onClick={() => props.handlePageChange("Search")}
          className={props.currentPage === "Search" ? "nav-link active" : "nav-link"}
          >
            Search
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/saved"
          onClick={() => props.handlePageChange("Saved")}
          className={props.currentPage === "Saved" ? "nav-link active" : "nav-link"}
          >
            Saved
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
