import React from "react";
import LeafRatingComponent from "./LeafRatingComponent";
import { Grid, Cell } from "styled-css-grid";

class CustomerReviewSummary extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div
        style={{
          width: "300px",
          height: "868px"
        }}
      >
        <h3>Customer Reviews</h3>
        <LeafRatingComponent currentItem={this.props.currentItem} type="main" />
        <div> {`${this.props.currentItem.totalReviews} customer ratings`}</div>

        <hr></hr>
        <h4>By feature</h4>
        {/* need to make a 3X2 grid */}
        <Grid columns={2} gap="2px">
          <Cell>foo</Cell>
          <Cell height={2}>bar</Cell>
          <Cell width={2}>baz</Cell>
        </Grid>

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
  }
}

export default CustomerReviewSummary;
