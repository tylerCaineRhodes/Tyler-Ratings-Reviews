import React from "react";
import StarRatingComponent from "react-star-rating-component";
import EditableRatingComponent from "./EditableLeafRatingComponent";

let rating, review_title, review_text;
let ref1 = React.createRef();

export default class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      review_text: "",
      review_title: "",
      rating: ""
    };

    this.handleReviewTextChange = this.handleReviewTextChange.bind(this);
    this.handleReviewTitleChange = this.handleReviewTitleChange.bind(this);
    this.handleReviewRatingChange = this.handleReviewRatingChange.bind(this);
  }

  handleReviewTextChange(event) {
    this.setState({ review_text: event.target.value });
  }

  handleReviewTitleChange(event) {
    this.setState({ review_title: event.target.value });
  }

  handleReviewRatingChange(rating) {
    this.setState({ rating: rating });
  }

  render() {
    return (
      <div>
        <h2>Create Review</h2>
        {/* import small main pik as well as the  description*/}
        <hr></hr>
        <h4>Overall rating</h4>
        <EditableRatingComponent
          totalStars={5}
          full={
            "http://canadaamazon-env.28zuhv6c2t.us-east-2.elasticbeanstalk.com/images/full_leaf.png"
          }
          empty={
            "http://canadaamazon-env.28zuhv6c2t.us-east-2.elasticbeanstalk.com/images/empty_leaf.png"
          }
          width={"50px"}
          height={"65px"}
          starClickCallback={this.handleReviewRatingChange}
        />
        <h4>Rate features</h4>
        <h6>Handle</h6>
        <EditableRatingComponent
          totalStars={5}
          full={
            "http://canadaamazon-env.28zuhv6c2t.us-east-2.elasticbeanstalk.com/images/full_leaf.png"
          }
          empty={
            "http://canadaamazon-env.28zuhv6c2t.us-east-2.elasticbeanstalk.com/images/empty_leaf.png"
          }
          width={"40px"}
          height={"45px"}
        />
        <h6>Appearance</h6>
        <EditableRatingComponent
          totalStars={5}
          full={
            "http://canadaamazon-env.28zuhv6c2t.us-east-2.elasticbeanstalk.com/images/full_leaf.png"
          }
          empty={
            "http://canadaamazon-env.28zuhv6c2t.us-east-2.elasticbeanstalk.com/images/empty_leaf.png"
          }
          width={"40px"}
          height={"45px"}
        />
        <h6>Smell</h6>
        <EditableRatingComponent
          totalStars={5}
          full={
            "http://canadaamazon-env.28zuhv6c2t.us-east-2.elasticbeanstalk.com/images/full_leaf.png"
          }
          empty={
            "http://canadaamazon-env.28zuhv6c2t.us-east-2.elasticbeanstalk.com/images/empty_leaf.png"
          }
          width={"40px"}
          height={"45px"}
        />
        <h4>Add a photo or video</h4>
        <div
          tabIndex="0"
          aria-label="Add a photo or video"
          datahook="ryp-media-upload-button"
          className="ryp__desktop ryp__media-upload-square-button-container"
          role="button"
          style={{
            backgroundImage: `url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMjYgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJzaHJpbmtJbWFnZUNUQS04MCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImV4cGwtY29weS0yMjkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00Ny4wMDAwMDAsIC0zMjMuMDAwMDAwKSIgZmlsbD0iI0FBQjdCOCIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9ImFzaW5NZXRhIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTE5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImFkZE1lZGlhIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcuMDAwMDAwLCAxNy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA1Ny4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSI0NC4zIDQxLjcgNDQuMyAzMCA0MS43IDMwIDQxLjcgNDEuNyAzMCA0MS43IDMwIDQ0LjMgNDEuNyA0NC4zIDQxLjcgNTYgNDQuMyA1NiA0NC4zIDQ0LjMgNTYgNDQuMyA1NiA0MS43Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";)`
          }}
        >
          <input
            type="file"
            accept="image/*,video/*"
            id="ryp__media-upload-banner-input"
            className="ryp__util__hidden"
            datahook="ryp-media-upload-input-file"
          />
        </div>
        <hr></hr>
        <h4>Add a headline</h4>
        <input
          type="text"
          data-hook="Don't-know-how-to-use-this"
          id="review-title"
          ref="review-title"
          placeholder="What's most important to know?"
          className="review-input-text review-form-error"
          style={{ width: "300px", height: "50px", marginBottom: "20px" }}
          onChange={this.handleReviewTitleChange}
        ></input>
        <h4>Write your review</h4>
        <textarea
          placeholder={`What did you like or dislike? 
      
      We're sorry if you didn't like it. Even if it wasn't our fault!`}
          id="review-text"
          ref={ref1}
          style={{ width: "600px", height: "400px", marginBottom: "50px" }}
          onChange={this.handleReviewTextChange}
        ></textarea>
        <button
          href={"#"}
          onClick={() => {
            this.props.handleSubmitReview({
              review_text: this.state.review_text,
              review_title: this.state.review_title,
              rating: this.state.rating,
              user_id: 1,
              product_id: this.props.currentItem.id
            });
          }}
        >
          Submit Review
        </button>
      </div>
    );
  }
}
