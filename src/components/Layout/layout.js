import React from "react";
import {
  LayoutChildrenWrapper,
  LayoutContainer,
  LayoutNoWidth,
} from "./styled.layout";

const Layout = ({ children }) => {
  return (
    <LayoutNoWidth>
      <LayoutContainer>
        <LayoutChildrenWrapper>{children}</LayoutChildrenWrapper>
      </LayoutContainer>
    </LayoutNoWidth>
  );
};

export default Layout;
