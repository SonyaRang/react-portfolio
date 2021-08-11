
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const aboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-light" />
          <p style={{ fontSize: "25px" }}>
            Hi I'm Sonya Rangraj, I am a recent graduate of University of Texas full stack web development certification. Currently living in the Netherlands with my parents till I can find a workplace in the US.
          </p>
          <p style={{ fontSize: "25px" }}>
          A results driven individual seeking a profession in full stack web development. I have acquired extensive knowledge and skills through my full stack coding program and marketing bachelor's degree.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default aboutMe;