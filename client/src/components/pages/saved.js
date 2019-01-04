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
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="col-12">
            <h2>Saved Books</h2>
            <ResultList results={this.state.books} />
          </div>
        </div>
      </div>
    )
  }
}

// const Saved = () => (
//   <div>
//     <Header />
//     <h1>Saved Page</h1>
//     <p>
//       Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
//       ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
//       quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
//       imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
//       diam, sit amet facilisis lectus blandit at.
//     </p>
//   </div>
// );

export default Saved;
