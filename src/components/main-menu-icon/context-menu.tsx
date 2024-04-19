"use client";
import { CurrentUserContext } from "@/internal/user-context";
import { Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { signOut } from "aws-amplify/auth";
import * as React from "react";
import { HiBars3 } from "react-icons/hi2";

export const BurgerContextMenu = () => {
  const userContext = React.useContext(CurrentUserContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      userContext?.setUser(undefined);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <IconButton
        size="medium"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        className="h-8 pt-4"
      >
        <HiBars3 className="h-6 w-6 text-slate-200 md:hidden" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => (window.location.href = "/")}>Home</MenuItem>
        <MenuItem onClick={() => (window.location.href = "/employees")}>
          Employees
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
      </Menu>
    </div>
  );
};
