import styled from "styled-components";
import theme, { BREAKPOINTS } from "../../theme/theme";

export const NavbarContainer = styled.div`
  height: 65px;
  width: 100vw;
  background-color: ${theme.palette.primary.main};
`;

export const NavbarWrapper = styled.div`
  max-width: ${BREAKPOINTS.extraLarge};
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavbarLogoWrapper = styled.div`
  height: 50px;
  width: 50px;
`;

export const NavbarLogoImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 15%;
`;

export const NavbarLinksWrapper = styled.div`
  max-width: 500px;
  margin: auto;
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const NavbarIconWrapper = styled.div``;
