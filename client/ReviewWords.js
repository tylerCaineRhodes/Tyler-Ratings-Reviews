import React from "react";
import { Grid, Cell } from "styled-css-grid";

class ReviewWords extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let words1 = ["froopy", "it's w/e", "ka is", "the posts", "the ghosts"];
    let words2 = [
      "Pure perfection",
      "the covenant",
      "builder refused",
      "I guess",
      "a wheel"
    ];
    let words3 = ["water of the womb", "I hate it!", "Amidst the", "his fists"];

    return (
      <div>
        <div style={{ marginBottom: "20px" }}>Read reviews that mention</div>
        <Grid
          columns={"233px 233px 233px"}
          justifyContent="start"
          areas={[
            "first_row first_row first_row ",
            "second_row second_row second_row ",
            "third_row third_row third_row"
          ]}
        >
          <Cell
            middle
            style={{ display: "flex", verticalAlign: "middle" }}
            area="first_row"
          >
            <div>
              {words1.map((keyWords, indx) => {
                return (
                  <button style={{ marginLeft: "30px" }} key={indx}>
                    {" "}
                    {keyWords}{" "}
                  </button>
                );
              })}
            </div>
          </Cell>
          <Cell
            middle
            style={{ display: "flex", verticalAlign: "middle" }}
            area="second_row"
          >
            <div>
              {words2.map((keyWords, indx) => {
                if (indx === 0) {
                  return <button key={indx}> {keyWords} </button>;
                } else {
                  return (
                    <button style={{ marginLeft: "30px" }} key={indx}>
                      {" "}
                      {keyWords}{" "}
                    </button>
                  );
                }
              })}
            </div>
          </Cell>
          <Cell
            middle
            style={{ display: "flex", verticalAlign: "middle" }}
            area="third_row"
          >
            <div>
              {words3.map((keyWords, indx) => {
                return (
                  <button style={{ marginLeft: "30px" }} key={indx}>
                    {keyWords}
                  </button>
                );
              })}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default ReviewWords;
