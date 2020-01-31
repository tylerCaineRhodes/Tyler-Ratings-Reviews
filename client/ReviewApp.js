// Importing libraries
import React from "react";
import Axios from "axios";
import StarRatingComponent from "react-star-rating-component";
import ReviewPage from "./ReviewPage";
import CustomerReviewSummary from "./CustomerReviewSummary";
import { Link, matchPath } from "react-router-dom";
import queryString from "query-string";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class ReviewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {
        rating: 1.5,
        productID: 1
      },
      ratings: []
    };
  }

  handleGetCurrentItem() {}

  handleSubmitReview() {
    // needs to POST to server with all the information that comes with the review
    // rating, comments,
    // will need to be added to a db table with a user, review, product
  }

  handleStartReview() {
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

  componentDidMount() {}

  render() {
    return (
      <div>
        <div>
          <CustomerReviewSummary currentItem={this.state.currentItem} />
        </div>
        <div>
          {/* <Customer_Images currentItem={this.currentItem} /> */}
          {/* <Mentioned_Words currentItem={this.currentItem} /> */}
          {/* <Review_Display currentItem={this.currentItem} /> */}
        </div>
      </div>
    );
  }
}

export default ReviewApp;
