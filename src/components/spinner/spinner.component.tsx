import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./spinner.styles";

const Spinner: React.FC = () => (
  <SpinnerContainer>
    <SpinnerOverlay />
  </SpinnerContainer>
);

export default Spinner;
