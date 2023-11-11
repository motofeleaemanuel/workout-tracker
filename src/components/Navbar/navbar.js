import React, { useState } from "react";
import {
  NavbarContainer,
  NavbarLinksText,
  NavbarLinksWrapper,
  NavbarLogoImage,
  NavbarLogoWrapper,
  NavbarWrapper,
} from "./styled.navbar";
import logo from "../../assets/logoImg.png";
import NavbarAvatar from "../NavbarAvatar/navbarAvatar";
import { useLocation, useNavigate } from "react-router-dom";
import { linkMaker } from "../../utils/linkMaker";
import { useTheme } from "styled-components";

const links = [
  { name: "Dashboard" },
  { name: "All Workouts" },
  { name: "Weight Tracker" },
  { name: "BMI Calculator" },
];

const Navbar = () => {
  const theme = useTheme();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isActiveLink = (pathname, link) => {
    return pathname === `/${linkMaker(link)}`;
  };

  const handleOnChangeRoute = (link) => {
    navigate(`/${linkMaker(link)}`);
    setIsNavbarOpen(false);
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarLogoWrapper>
          <NavbarLogoImage src={logo} alt="logos" />
        </NavbarLogoWrapper>
        <NavbarLinksWrapper isnavbaropen={String(isNavbarOpen)}>
          {links.map((link, index) => {
            const isActive = isActiveLink(location.pathname, link.name);
            return (
              <NavbarLinksText
                key={link + index}
                active={String(isActive)}
                theme={theme}
                onClick={() => handleOnChangeRoute(link.name)}
              >
                {link.name}
              </NavbarLinksText>
            );
          })}
        </NavbarLinksWrapper>
        <NavbarAvatar
          setisnavbaropen={setIsNavbarOpen}
          isnavbaropen={isNavbarOpen}
        />
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
