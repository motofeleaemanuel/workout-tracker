import styled from "styled-components";
import theme, { BREAKPOINTS } from "../../theme/theme";
import { Typography } from "@mui/material";

export const NavbarContainer = styled.div`
  height: 65px;
  width: 100vw;
  background-color: ${theme.palette.primary.main};
  position: relative;
`;

export const NavbarWrapper = styled.div`
  max-width: ${BREAKPOINTS.extraLarge};
  padding: 0px 12px 0px 12px;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: ${BREAKPOINTS.medium}) {
    justify-content: space-between;
  }
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
  @media (max-width: ${BREAKPOINTS.medium}) {
    color: black;
    max-width: ${BREAKPOINTS.medium};
    position: fixed;
    z-index: 5;
    height: calc(100vh - 65px);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    left: ${(props) => (props.isNavbarOpen ? "0" : "-250%")};
    top: 65px;
    background-color: white;
    width: 100vw;
    text-align: center;
    transition: 0.4s ease;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
  }
`;

export const NavbarLinksText = styled(Typography)`
  color: white;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  ${(props) => props.isActive && "border-bottom: 2px solid white;"}
  @media (max-width: ${BREAKPOINTS.medium}) {
    width: 100%;
    border-top: 1px solid white;
    border-bottom: none;
    padding: 10px 0px 10px 0px;
    color: ${theme.palette.primary.main} !important;
    &:hover {
      color: white !important;
      background-color: ${theme.palette.primary.main} !important;
    }
    ${(props) =>
      props.isActive &&
      `background-color: ${theme.palette.primary.main}; color:white !important`}
  }
`;

export const NavbarIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
