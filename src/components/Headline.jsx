import React from "react";
import Container from "react-bootstrap/Container";

const Headline = () => {
  return (
    <div className="headline-div">
      <Container>
        <p className="headline-p">
          Schedule a <b className="headline-bold">30 Minute </b>
          consultation with a <b className="headline-bold">client advisor </b>today.
        </p>
      </Container>
    </div>
  );
};

export default Headline;
