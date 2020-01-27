// Importing libraries
import React from "react";
import Axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {},
      ratings: []
    };
  }

  handleWriteReview() {
    // needs to POST to server with all the information that comes with the review
    // rating, comments, ...?
    // will need to be added to a db table with a user, review, product
  }

  handleUploadImages() {
    // needs to POST image file data to the server
    // will need to be added to a db table with a user, review, product
  }

  handleSortReviewsByRating() {
    // Need to re-render review list with the a get request for only reviews of a certain rating
  }

  handleSortReviewsByKeyword() {
    // Need to search a review's text for a keyword and then display only the reviews that contain it
  }

  handleCommentReviews() {
    // Need to
  }

  render() {
    const status = "Next player: " + (this.state.xIsNext ? "X" : "O");

    return (
      <div>
        <div className="status">{status}</div>
        <a
          href="#"
          data-toggle="popover"
          title="Popover Header"
          data-content="Some content inside the popover"
        >
          Toggle popover
        </a>
        <div className="board-row"></div>
        <div className="board-row"></div>
      </div>
    );
  }
}

export default App;
