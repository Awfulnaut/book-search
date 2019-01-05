import React, { Component } from "react";
import Header from "../Header";
import SearchForm from "../SearchForm";
import ResultList from "../ResultList";
import API from "../utils/API";

class Search extends Component {
  state = {
    search: "",
    books: []
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleBookSave = id => {
    const result = this.state.books.find(result => result.id === id);
    API.saveBook({
      id: result.id,
      title: result.volumeInfo.title,
      link: result.volumeInfo.infoLink,
      authors: result.volumeInfo.authors.join(", "),
      image: result.volumeInfo.imageLinks.thumbnail,
      description: result.volumeInfo.description
    })
  };

  componentDidMount() {
    this.searchBooks("Harry Potter");
  }

  handleSearch = event => {
    event.preventDefault();
    this.searchBooks(this.state.search)
  }

  searchBooks = query => {
    const results = [];
    API.search(query)
      .then(function(res) {
        res.data.items.forEach(book => {
          results.push(
            {
              id: book.id,
              title: book.volumeInfo.title,
              link: book.volumeInfo.infoLink,
              authors: book.volumeInfo.authors.join(", "),
              image: book.volumeInfo.imageLinks.thumbnail,
              description: book.volumeInfo.description
            }
          )
        });
        console.log(`Query: ${query}`)
        console.log(results)
      })
      .then(() => this.setState({ books: results }))
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
              handleInputChange={this.handleInputChange}
              handleSearch={this.handleSearch}
            />
            <h2>Results</h2>
            <ResultList
              books={this.state.books}
              handleBookSave={this.handleBookSave}
              currentPage="search"
            />
          </div>
        </div>
      </div>
    )
  }
};

export default Search;
