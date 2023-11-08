import styled from "styled-components";
import { Typography } from "@mui/material";
import theme, { BREAKPOINTS } from "../../theme/theme";
import Carousel from "react-material-ui-carousel";

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginCard = styled.div`
  height: 700px;
  width: 1000px;
  background-color: white;
  border-radius: 24px;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: ${BREAKPOINTS.large}) {
    height: 100%;
    border-radius: 0px;
  }
`;

export const LoginCardLeftSide = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${BREAKPOINTS.large}) {
    width: 100%;
  }
`;

export const LoginCardRightSide = styled.div`
  width: 50%;
  height: 100%;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  @media (max-width: ${BREAKPOINTS.large}) {
    display: none;
  }
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LoginFormLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const LoginFormInputs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 50px 50px 50px;
`;

export const ResizedCarousel = styled(Carousel)`
  height: 100%;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  .MuiButtonBase-root {
    height: 30px;
    width: 30px;
  }
`;

export const ForgotPasswordText = styled(Typography)`
  display:inline;
  font-size: 12px !important;
  font-weight: bold !important;
  color: ${theme.palette.primary.main};
  cursor: pointer;
  margin-bottom:12px !important;
  &:hover{
  color: black;
  }
}
`;

export const FeatureText = styled(Typography)`
  position: absolute;
  bottom: 0;
  left: 185px;
  font-size: 12px;
  color: ${theme.palette.disabled.main};
  @media (max-width: ${BREAKPOINTS.large}) {
    display: none;
  }
`;
