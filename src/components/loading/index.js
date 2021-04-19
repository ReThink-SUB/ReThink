import React from "react";

import { Container } from "./styles/loading";

export default function Loading({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h3>Loading ReThink...</h3>
    </Container>
  );
}
