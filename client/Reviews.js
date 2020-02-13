import React from "react";
import { Grid, Cell } from "styled-css-grid";
import LeafRatingComponent from "./LeafRatingComponent";
import Button from "react-bootstrap/Button";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let reviews = this.props.currentItem.reviews.slice(this.props.currentItem.reviews.length - 7).reverse();

    return (
      <div>
        <select style={{ marginTop: "30px", marginBottom: "25px" }}>
          <option value="">Top Reviews</option>
          <option value="">Most Recent</option>
        </select>

        <Grid columns={"minmax(402px, 700px)"} justifyContent="start">
          {reviews.map((review, indx) => {
            return (
              <div key={indx}>
                <Cell
                  middle
                  style={{ display: "flex", verticalAlign: "middle" }}
                >
                  <div>
                    <img
                      src={`https://picsum.photos/50?random=${indx}`}
                      style={{ marginRight: "15px", borderRadius: "50%" }}
                    />
                    {`Random User  ${review.user_id}`}
                  </div>
                </Cell>
                <Cell
                  middle
                  style={{ display: "flex", verticalAlign: "middle" }}
                >
                  <LeafRatingComponent
                    currentItem={this.props.currentItem}
                    type="review"
                    review={review}
                  />
                  <div className="review-location-time">{`Reviewed in Saskatchewan on ${review.date}`}</div>
                  <div
                    className="review-varified"
                    style={{ marginBottom: "5px" }}
                  >
                    Verified Purchase
                  </div>
                </Cell>
                <Cell
                  middle
                  style={{ display: "flex", verticalAlign: "middle" }}
                >
                  <div>{`${review.review_text}`}</div>
                </Cell>
                <Cell
                  middle
                  style={{ display: "flex", verticalAlign: "middle" }}
                >
                  <div className="review-rowA" style={{ marginTop: "12px" }}>
                    <Button
                      style={{
                        alignSelf: "center",
                        paddingLeft: "30px",
                        paddingRight: "30px"
                      }}
                    >
                      Helpful
                    </Button>
                    <i
                      className="review-icon-text-separator"
                      role="img"
                      aria-label="|"
                      style={{ alignSelf: "center" }}
                    ></i>
                    <div style={{ alignSelf: "center" }}>Comment</div>
                    <i
                      className="review-icon-text-separator"
                      role="img"
                      aria-label="|"
                      style={{ alignSelf: "center" }}
                    ></i>
                    <div style={{ alignSelf: "center" }}>Report abuse</div>
                  </div>
                </Cell>
              </div>
            );
          })}
        </Grid>
        {/* <button>See more reviews</button> */}
      </div>
    );
  }
}

export default Reviews;
