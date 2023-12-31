import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { NavbarIconWrapper } from "../Navbar/styled.navbar";
import { Divider, Typography, useTheme } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { BurgerMenu, BurgerMenuWrapper } from "./styled.navbarAvatar";
import ThemeButton from "../ThemeButton/themeButton";

function NavbarAvatar({ setisnavbaropen, isnavbaropen }) {
  const theme = useTheme();
  const { user, logout } = useAuth0();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setIsPopoverOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setIsPopoverOpen(false);
  };

  return (
    <NavbarIconWrapper>
      <BurgerMenuWrapper>
        <Button
          onClick={() => {
            setisnavbaropen(!isnavbaropen);
          }}
        >
          <BurgerMenu fontSize="large" />
        </Button>
      </BurgerMenuWrapper>
      <Avatar alt="Remy Sharp" src={user.picture} onClick={handleAvatarClick} />
      <Popover
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div style={{ display: "flex", padding: "12px" }}>
          <img
            src={user.picture}
            height={40}
            width={40}
            alt="wafe"
            style={{ borderRadius: "100%", marginRight: "12px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography style={{ fontSize: "14px" }}>
              {user.given_name} {user.family_name}
            </Typography>
            <Typography style={{ fontSize: "14px" }}>{user.email}</Typography>
          </div>
        </div>
        <div style={{ padding: "0px 12px 0px 12px" }}>
          <Divider />
        </div>
        <div
          style={{
            display: "flex",
            padding: "8px 12px 8px 12px",
            alignItems: "center",
          }}
        >
          <Typography style={{ marginRight: "8px", fontSize: "14px" }}>
            Change Theme
          </Typography>
          <ThemeButton />
        </div>
        <div style={{ padding: "0px 12px 0px 12px" }}>
          <Divider />
        </div>
        <div style={{ padding: "9px 12px 9px 12px" }}>
          <Button
            style={{
              padding: "3px 0px 3px 0px",
              color: theme.palette.primary.main,
            }}
            onClick={() => {
              localStorage.removeItem("userCreated");
              logout();
            }}
          >
            <LogoutIcon style={{ color: theme.palette.primary.main }} />
            Logout
          </Button>
        </div>
      </Popover>
    </NavbarIconWrapper>
  );
}

export default NavbarAvatar;
