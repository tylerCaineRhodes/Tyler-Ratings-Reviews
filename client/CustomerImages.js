import React from "react";
import { Grid, Cell } from "styled-css-grid";

class CustomerImages extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div style={{ marginBottom: "0px" }}>
        <div>Customer Images</div>
        <Grid columns={"153px 153px 153px 153px"} justifyContent="start">
          <Cell middle style={{ display: "flex", verticalAlign: "middle" }}>
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              <img src="https://picsum.photos/153?random=4" />
            </div>
          </Cell>
          <Cell middle style={{ display: "flex", verticalAlign: "middle" }}>
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              <img src="https://picsum.photos/153?random=1" />
            </div>
          </Cell>
          <Cell middle style={{ display: "flex", verticalAlign: "middle" }}>
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              <img src="https://picsum.photos/153?random=2" />
            </div>
          </Cell>
          <Cell middle style={{ display: "flex", verticalAlign: "middle" }}>
            <div
              style={{
                alignSelf: "center",
                textAlign: "center",
                verticalAlign: "middle"
              }}
            >
              <img src="https://picsum.photos/153?random=3" />
            </div>
          </Cell>
        </Grid>
        <div className="review-link">See all customer images</div>
      </div>
    );
  }
}

export default CustomerImages;
