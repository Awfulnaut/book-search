import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Search from "./components/pages/search";
import Saved from "./components/pages/saved";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {
    currentPage: "Search"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Saved") {
      return <Saved />;
    } else {
      return <Search />;
    }
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar 
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
          />
          {this.renderPage()}
        </div>
      </Router>
    );
  }
}

export default App;
