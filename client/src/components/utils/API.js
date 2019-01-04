import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

// Export an object with a "search" method that searches the Google Books API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
