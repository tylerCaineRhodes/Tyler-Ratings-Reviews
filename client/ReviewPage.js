import React from "react";
import StarRatingComponent from "react-star-rating-component";

const ReviewPage = props => (
  <div>
    <h2>Create Review</h2>
    {/* import small main pik as well as the  description*/}
    <hr></hr>
    <h4>Overall rating</h4>
    <StarRatingComponent
      name="rate2"
      editing={true}
      renderStarIcon={() => (
        <span>
          <img
            src="../dist/images/half_leaf.png"
            alt="test"
            width="40"
            height="45"
          />
        </span>
      )}
      starCount={5}
      value={8}
    />
    <h4>Rate features</h4>
    <h4>Add a photo or video</h4>
    <div className="review__media-upload-square-button-container">
      <input
        type="file"
        accept="image/*,video/*"
        id="pik-upload-input"
        data-hook="Don't-know-how-to-use-this"
      ></input>
    </div>
    <hr></hr>
    <h4>Add a headline</h4>
    <input
      type="text"
      data-hook="Don't-know-how-to-use-this"
      id="review-title"
      placeholder="What's most important to know?"
      className="review-input-text review-form-error"
    ></input>
    <h4>Write your review</h4>
    <textarea
      placeholder="What did you like or dislike? What did you use this product for?"
      id="ryp-review-text"
      height="100px"
    ></textarea>
  </div>
);

export default ReviewPage;
