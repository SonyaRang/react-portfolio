import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const contactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-primary" />
          <h4>
              Here is my contact information. You can reach me anytime
          </h4>
          <hr className="hr-primary w-25" />
          <h3>Cell Phone</h3>
          <hr className="hr-light w-25" />
          <a href="tel:936-555-555">
            <MDBIcon icon="phone-alt" /> 936-555-555
          </a>
          <hr className="hr-light w-25" />
          <h3>E-mail</h3>
          <hr className="hr-primary w-25" />
          <a href="mailto:sonyarangraj@msn.com">
            <MDBIcon icon="envelope" /> sonyarangraj@msn.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default contactInfo;