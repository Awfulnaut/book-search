import React, { Component } from "react";
import Header from "../Header";
import SearchForm from "../SearchForm";
import ResultList from "../ResultList";
import API from "../utils/API";

class Search extends Component {
  state = {
    search: "",
    results: []
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Google Books API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  componentDidMount() {
    this.searchBooks("Harry Potter");
  }

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.items }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>

        <Header />

        <div className="container">
          <div className="col-12">
            <h2>Book Search</h2>
            <SearchForm 
              search={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
            <ResultList results={this.state.results} />
          </div>
        </div>
      </div>
    )
  }
};

export default Search;
