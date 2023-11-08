import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { BREAKPOINTS } from "../../theme/theme";

export const BurgerMenu = styled(MenuIcon)`
  color: white;
`;

export const BurgerMenuWrapper = styled.div`
  display: none;
  @media (max-width: ${BREAKPOINTS.medium}) {
    display: inline-block;
  }
`;
