import React from "react";
import {
  NavbarContainer,
  NavbarLinksWrapper,
  NavbarLogoImage,
  NavbarLogoWrapper,
  NavbarWrapper,
} from "./styled.navbar";
import logo from "../../assets/logoImg.png";
import { Typography } from "@mui/material";
import NavbarAvatar from "../NavbarAvatar/navbarAvatar";
import { useLocation, useNavigate } from "react-router-dom";
import { linkMaker } from "../../utils/linkMaker";

const links = [
  { name: "Dashboard" },
  { name: "All Workouts" },
  { name: "Weight Tracker" },
  { name: "BMI Calculator" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActiveLink = (pathname, link) => {
    return pathname === `/${linkMaker(link)}`;
  };
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarLogoWrapper>
          <NavbarLogoImage src={logo} alt="logos" />
        </NavbarLogoWrapper>
        <NavbarLinksWrapper>
          {links.map((link, index) => {
            const isActive = isActiveLink(location.pathname, link.name);
            return (
              <Typography
                style={{
                  color: "white",
                  fontWeight: 500,
                  fontSize: "16px",
                  borderBottom: isActive ? "2px solid white" : "none",
                  cursor: "pointer",
                }}
                key={link + index}
                onClick={() => navigate(`/${linkMaker(link.name)}`)}
              >
                {link.name}
              </Typography>
            );
          })}
        </NavbarLinksWrapper>
        <NavbarAvatar />
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
