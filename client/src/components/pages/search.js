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

        // for (let i = 0; i < res.data.items.length; i++) {
        //   var authors;
        //   if (res.data.items[i].authors.length >= 1) {
        //     authors = res.data.items[i].authors.join(", ")
        //   } else {
        //     authors = res.data.items[i].authors
        //   }
        //   results.push(
        //     {
        //       id: res.data.items[i].id,
        //       title: res.data.items[i].volumeInfo.title,
        //       link: res.data.items[i].volumeInfo.infoLink,
        //       authors: res.data.items[i].volumeInfo.authors.join(", "),
        //       image: res.data.items[i].volumeInfo.imageLinks.thumbnail,
        //       description: res.data.items[i].volumeInfo.description
        //     }
        //   )
        // }

        res.data.items.forEach(book => {
          results.push(
            {
              id: book.id,
              title: book.volumeInfo.title ? book.volumeInfo.title : "No title available",
              link: book.volumeInfo.infoLink ? book.volumeInfo.infoLink : "",
              authors: book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "",
              image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "",
              description: book.volumeInfo.description ? book.volumeInfo.description : "No description available"
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
