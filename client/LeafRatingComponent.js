import React from "react";
import StarRatingComponent from "react-star-rating-component";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

class LeafRatingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let halfStar,
      starWidth,
      starHeight,
      extraInfo,
      extraInfoStyle,
      blockSize,
      popoverSymbol,
      stars;

    if (this.props.featureReview) {
      stars = computeStars(this.props.featureReview.rating);
    } else {
      stars = computeStars(this.props.currentItem.rating);
    }

    let emptyStarVal = stars[0];
    let halfStarVal = stars[1];
    let fullStarVal = stars[2];

    if (this.props.type === "main") {
      starHeight = "35";
      starWidth = "30";
      popoverSymbol = `review-icon review-icon-popover`;
      extraInfo = `${round(this.props.currentItem.rating, 1)} out of 5`;
      extraInfoStyle = {
        font: "Gill Sans",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        alignSelf: "center",
        marginLeft: "10px"
      };
      blockSize = {
        height: "60px",
        display: "flex",
        textAlign: "center",
        alignSelf: "center"
      };
    } else if (this.props.type === "review") {
      starHeight = "25";
      starWidth = "20";
      let stars = computeStars(
        this.props.review.rating
      );
      emptyStarVal = stars[0];
      halfStarVal = stars[1];
      fullStarVal = stars[2];
      extraInfo = this.props.review.review_title;
      extraInfoStyle = {
        font: "Gill Sans",
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center",
        alignSelf: "center",
        marginLeft: "10px"
      };
      blockSize = {
        marginTop: "5px",
        width: "300px",
        height: "30px",
        display: "flex"
      };
    } else if (this.props.type === "featureReview") {
      starHeight = "25";
      starWidth = "20";
      extraInfo = round(this.props.featureReview.rating, 1);
      extraInfoStyle = {
        font: "Gill Sans",
        fontSize: 15,
        textAlign: "center",
        alignSelf: "center",
        marginLeft: "10px"
      };
      blockSize = {
        width: "150px",
        height: "60px",
        display: "flex",
        textAlign: "center",
        alignSelf: "center"
      };
    } else if (this.props.type === "enterReview") {
      starHeight = "25";
      starWidth = "20";
      extraInfo = round(this.props.featureReview.rating, 1);
      extraInfoStyle = {
        font: "Gill Sans",
        fontSize: 15,
        textAlign: "center",
        alignSelf: "center",
        marginLeft: "10px"
      };
      blockSize = {
        width: "150px",
        height: "60px",
        display: "flex",
        textAlign: "center",
        alignSelf: "center"
      };
    }

    let fullStars = (
      <StarRatingComponent
        name="full"
        editing={false}
        renderStarIcon={() => (
          <span>
            <img
              src="http://canadaamazon-env.28zuhv6c2t.us-east-2.elasticbeanstalk.com/images/full_leaf.png"
              alt="test"
              width={starWidth}
              height={starHeight}
            />
          </span>
        )}
        starCount={fullStarVal}
      />
    );

    let emptyStars = (
      <StarRatingComponent
        name="empty"
        editing={false}
        style={{
          alignSelf: "center",
          textAlign: "center",
          verticalAlign: "middle"
        }}
        renderStarIcon={() => (
          <span>
            <img
              src="http://canadaamazon-env.28zuhv6c2t.us-east-2.elasticbeanstalk.com/images/empty_leaf.png"
              alt="test"
              width={starWidth}
              height={starHeight}
            />
          </span>
        )}
        starCount={emptyStarVal}
      />
    );

    halfStar = (
      <StarRatingComponent
        name="halfy"
        editing={false}
        renderStarIcon={() => (
          <span>
            <img
              src="http://canadaamazon-env.28zuhv6c2t.us-east-2.elasticbeanstalk.com/images/half_leaf.png"
              alt="test"
              width={starWidth}
              height={starHeight}
            />
          </span>
        )}
        starCount={halfStarVal}
      />
    );
    const hidePopover = () => {
      this.refs.overlay.handleHide();
    };
    if (popoverSymbol) {
      const popover = (
        <Popover id="popover-basic">
          <Popover.Content>
            Saskatchewanazon calculates a product’s star ratings based on 15
            premade reviews assigned to random users. All randomly generated
            reviews' ratings are averaged and categorized to give you the data
            shown here.
          </Popover.Content>
        </Popover>
      );

      <Button onClick={this.hidePopover}></Button>;

      const MainReviewPopover = () => (
        <OverlayTrigger
          trigger={["hover", "click", "focus"]}
          placement="bottom"
          transition={true}
          overlay={popover}
        >
          <div style={blockSize}>
            {fullStars}
            {halfStar}
            {emptyStars}
            <div style={extraInfoStyle}>{extraInfo}</div>
            <div className={popoverSymbol}></div>
          </div>
        </OverlayTrigger>
      );

      return (
        <div>
          <MainReviewPopover></MainReviewPopover>
        </div>
      );
    } else {
      return (
        <div style={blockSize}>
          {fullStars}
          {halfStar}
          {emptyStars}
          <div style={extraInfoStyle}>{extraInfo}</div>
        </div>
      );
    }
  }
}

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

function computeStars(rating) {
  let halfStarVal = 0;
  let emptyStarVal = 5 - Math.ceil(rating);
  let fullStarVal = Math.floor(rating);

  if (rating !== Math.floor(rating)) {
    if (
      rating - Math.floor(rating) >= 0.25 &&
      rating - Math.floor(rating) <= 0.75
    ) {
      halfStarVal = 1;
    } else if (rating - Math.floor(rating) < 0.25) {
      halfStarVal = 0;
      emptyStarVal += 1;
    } else {
      halfStarVal = 0;
      fullStarVal += 1;
    }
  }
  return [emptyStarVal, halfStarVal, fullStarVal];
}

export default LeafRatingComponent;
