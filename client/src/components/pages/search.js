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
    const result = this.state.books.find(book => book.id === id);
    API.saveBook({
      id: result.id,
      title: result.title,
      link: result.link,
      authors: result.authors,
      image: result.image,
      description: result.description
    }).then(() => {
      alert(`A book added to your saved list:\n${result.title}`)
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
              title: book.volumeInfo.title ? book.volumeInfo.title : "Title not found",
              link: book.volumeInfo.infoLink ? book.volumeInfo.infoLink : "",
              authors: book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Author not found",
              image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "http://placehold.it/128x195",
              description: book.volumeInfo.description ? book.volumeInfo.description : "Description not found"
            }
          )
        });
      })
      .then(() => this.setState({ books: results }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>

        <Header title="Google Books Search"/>

        <div className="container">
          <div className="col-12">
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
