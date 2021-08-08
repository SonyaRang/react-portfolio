
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
            Hi I'm Sonya Rangraj, I am a recent graduate of University of Texas full stack web development certification. Currently living in the Netherlands with my parents till I can find a workplace in the US. I am looking at many job opportunities everyday and seek out to apply. My favorite hobbies are yoga, ceramics, and learning to fence. 
          </p>
          <p style={{ fontSize: "25px" }}>
            I am very well versed in many skills. including computer science, Microsoft office, google analytics, and javascript. 
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default aboutMe;