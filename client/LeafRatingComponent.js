import React from "react";
import StarRatingComponent from "react-star-rating-component";

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

class LeafRatingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let halfStarVal;
    let halfStar;
    let starWidth;
    let starHeight;
    let extraInfo;
    if (
      this.props.currentItem.rating -
        Math.floor(this.props.currentItem.rating) >=
      0.5
    ) {
      halfStarVal = 1;
    } else {
      halfStarVal = 0;
    }

    if (this.props.type === "main") {
      starHeight = "35";
      starWidth = "30";
      extraInfo = `${round(this.props.currentItem.rating, 1)} out of 5`;
    } else if (this.props.type === "review") {
      starHeight = "25";
      starWidth = "20";
      extraInfo = this.props.reviewTitle;
    } else if (this.props.type === "featureReview") {
      starHeight = "25";
      starWidth = "20";
      extraInfo = round(this.props.currentItem.rating, 1);
    }

    let fullStars = (
      <StarRatingComponent
        name="halfy"
        editing={false}
        renderStarIcon={() => (
          <span style={{ verticalAlign: "middle" }}>
            <img
              src="../dist/images/full_leaf.png"
              alt="test"
              width="30"
              height="35"
              style={{ verticalAlign: "middle" }}
            />
          </span>
        )}
        starCount={Math.floor(this.props.currentItem.rating)}
        value={8}
      />
    );

    let emptyStars = (
      <StarRatingComponent
        name="halfy"
        editing={false}
        renderStarIcon={() => (
          <span style={{ verticalAlign: "middle" }}>
            <img
              src="../dist/images/empty_leaf.png"
              alt="test"
              width="30"
              height="35"
              style={{ verticalAlign: "middle" }}
            />
          </span>
        )}
        starCount={5 - Math.ceil(this.props.currentItem.rating)}
        value={8}
      />
    );

    halfStar = (
      <StarRatingComponent
        name="halfy"
        editing={false}
        renderStarIcon={() => (
          <span style={{ verticalAlign: "middle" }}>
            <img
              src="../dist/images/half_leaf.png"
              alt="test"
              width="30"
              height="35"
              style={{ verticalAlign: "middle" }}
            />
          </span>
        )}
        starCount={halfStarVal}
        value={8}
      />
    );
    return (
      <div
        style={{
          width: "250px",
          height: "45px",
          display: "inline-block"
        }}
      >
        {fullStars}
        {halfStar}
        {emptyStars}
        <div
          style={{
            display: "inline-block",
            height: "125%",
            font: "Gill Sans",
            fontWeight: "bold",
            fontSize: 18,
            verticalAlign: "middle"
          }}
        >
          {extraInfo}
        </div>
      </div>
    );
  }
}

export default LeafRatingComponent;
