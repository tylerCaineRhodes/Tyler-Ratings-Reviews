import React from "react";
import LeafRatingComponent from "./LeafRatingComponent";
import { Grid, Cell } from "styled-css-grid";
import ProgressBar from "react-bootstrap/ProgressBar";

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

class ReviewBars extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let fiveStarPercent = round(
      (this.props.currentItem.fiveLeafReviews /
        this.props.currentItem.totalReviews) *
        100,
      2
    );
    let fourStarPercent = round(
      (this.props.currentItem.fourLeafReviews /
        this.props.currentItem.totalReviews) *
        100,
      2
    );
    let threeStarPercent = round(
      (this.props.currentItem.threeLeafReviews /
        this.props.currentItem.totalReviews) *
        100,
      2
    );
    let twoStarPercent = round(
      (this.props.currentItem.twoLeafReviews /
        this.props.currentItem.totalReviews) *
        100,
      2
    );
    let oneStarPercent = round(
      (this.props.currentItem.oneLeafReviews /
        this.props.currentItem.totalReviews) *
        100,
      2
    );

    return (
      <div stle={{ marginLeft: "18px" }}>
        <Grid columns={"50px 200px 50px"} justifyContent="space-around">
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              5 star
            </div>
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <div style={{ width: "190px", alignSelf: "center" }}>
              <ProgressBar now={fiveStarPercent} className="ca-progress" />
            </div>
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              {`${fiveStarPercent}%`}
            </div>
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              4 star
            </div>
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <div style={{ width: "190px", alignSelf: "center" }}>
              <ProgressBar now={fourStarPercent} className="ca-progress" />
            </div>
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              {`${fourStarPercent}%`}
            </div>
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              3 star
            </div>
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <div style={{ width: "190px", alignSelf: "center" }}>
              <ProgressBar now={threeStarPercent} className="ca-progress" />
            </div>
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              {`${threeStarPercent}%`}
            </div>
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              2 star
            </div>
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <div style={{ width: "190px", alignSelf: "center" }}>
              <ProgressBar now={twoStarPercent} className="ca-progress" />
            </div>
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              {`${twoStarPercent}%`}
            </div>
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              1 star
            </div>
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <div style={{ width: "190px", alignSelf: "center" }}>
              <ProgressBar now={oneStarPercent} className="ca-progress" />
            </div>
          </Cell>
          <Cell style={{ display: "flex", verticalAlign: "middle" }}>
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              {`${oneStarPercent}%`}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default ReviewBars;
