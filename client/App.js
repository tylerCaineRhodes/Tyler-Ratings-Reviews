// Importing libraries
import React from "react";
import Axios from "axios";
import ReviewPage from "./ReviewPage";
import CustomerReviewSummary from "./CustomerReviewSummary";
import ReviewWords from "./ReviewWords";
import CustomerImages from "./CustomerImages";
import Reviews from "./Reviews";
import { Link, matchPath } from "react-router-dom";
import queryString from "query-string";
import { Grid, Cell } from "styled-css-grid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: [],
      currentItem: { id: 3 },
      currentReviewWord: null,
      currentReviewOrder: "random"
    };
    // this url needs to be the deployment address
    this.url = `http://canadaamazon-env.28zuhv6c2t.us-east-2.elasticbeanstalk.com/`;

    this.handleGetCurrentItem = this.handleGetCurrentItem.bind(this);
    // this.handleCommentReviews = this.handleCommentReviews.bind(this);
    // this.handleSortReviewsByKeyword = this.handleSortReviewsByKeyword.bind(
    //   this
    // );
    // this.handleSortReviewsByRating = this.handleSortReviewsByRating.bind(this);
    // this.handleStartReview = this.handleStartReview.bind(this);
    // this.handleSubmitReview = this.handleSubmitReview.bind(this);
    // this.handleUploadImages = this.handleUploadImages.bind(this);
    // this.grabReviewData = this.grabReviewData.bind(this);
    this.handleGetCurrentProduct = this.handleGetCurrentProduct.bind(this);
  }

  handleGetCurrentItem() {
    //'http://localhost:8081/dist'
    Axios.get(`/dist`).then(currentItem => {
      console.log('here is current review -->', currentItem.data.rows);
      let betterCurrentItem = {
        id: currentItem.data.rows[0].id,
        name: currentItem.data.rows[0].review_title,
        description: currentItem.data.rows[0]["DESCRIPTION"],
        price: currentItem.data[0]["price"],
        category_id: currentItem.data.rows[0]["category_id"],
        rating: currentItem.data.rows[1]["AVG(rating)"],
        totalReviews: currentItem.data.rows[1]["COUNT(rating)"],
        reviews: currentItem.data[2],
        fiveLeafReviews: currentItem.data.rows[3][0]["COUNT(rating)"],
        fourLeafReviews: currentItem.data.rows[3][1]["COUNT(rating)"],
        threeLeafReviews: currentItem.data.rows[3][2]["COUNT(rating)"],
        twoLeafReviews: currentItem.data.rows[3][3]["COUNT(rating)"],
        oneLeafReviews: currentItem.data.rows[3][4]["COUNT(rating)"]
      };
      this.setState({ currentItem: betterCurrentItem });
    });
  }
  handleGetCurrentProduct(){
    Axios.get('http://localhost:8081/notdist').then(currentProduct => {
      console.log('current product --->', currentProduct.data.rows);
    }).catch(err => {
      console.log('nah dood' , err)
    })
  }

  grabReviewData(reviewData, cb) {
    Axios.post(`${this.url}add_review`, reviewData).then(cb);
  }

  handleSubmitReview(reviewData) {
    this.grabReviewData(
      reviewData,
      this.handleGetCurrentItem(
        `${this.url}dist/?productID=${this.state.currentItem.id}`
      )
    );
    // needs to POST to server with all the information that comes with the review
    // rating, comments,
    // will need to be added to a db table with a user, review, product
  }

  handleStartReview() {
    // opens up a review making page
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

  componentDidMount() {
    window.addEventListener("click", event => {
      if (
        event.target.getAttribute("data-id") &&
        event.target.getAttribute("data-id") !== this.state.currentItem.id &&
        !isNaN(event.target.getAttribute("data-id"))
      ) {
        this.setState(
          { currentItem: { id: event.target.getAttribute("data-id") } },
          () => {
            this.handleGetCurrentItem(
              `/dist`
            );
          }
        );
      }
    });
    this.handleGetCurrentItem(
      // `dist/?productID=${this.state.currentItem.id}`
    );
    this.handleGetCurrentProduct();
    // this.handleGetCurrentItem();
  }

  render() {
    if (this.state.currentItem.reviews) {
      return (
        <div>
          <hr></hr>
          <Grid
            columns={"330px 95px minmax(402px,800px) minmax(340px,1fr)"}
            justifyContent="start"
            areas={[
              "review_mettrics .  customer_images .",
              "review_mettrics   . review_words .",
              "review_mettrics .  reviews ."
            ]}
          >
            <Cell area="review_mettrics">
              <div>
                <CustomerReviewSummary
                  currentItem={this.state.currentItem}
                  handleSubmitReview={this.handleSubmitReview}
                />
              </div>
            </Cell>
            <Cell area="customer_images">
              <div>
                <CustomerImages currentItem={this.state.currentItem} />
              </div>
            </Cell>
            <Cell area="review_words">
              <div>
                <ReviewWords currentItem={this.state.currentItem} />
              </div>
            </Cell>
            <Cell area="reviews">
              <div>
                <Reviews currentItem={this.state.currentItem} />
              </div>
            </Cell>
          </Grid>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default App;
