import React, { Component } from "react";
import Header from "../Header";
import API from "../utils/API";
import ResultList from "../ResultList";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      // .then(() => {console.log(this.state.books)})
      .catch(err => console.log(err));
  };

  handleDelete = id => {
    API.deleteBook(id)
      .then(this.loadBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Header title="Your Saved Books"/>
        <div className="container">
          <div className="col-12 mb-4">
            <ResultList
              books={this.state.books}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Saved;
