import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Container } from "@mui/system";
import CustomButton from "./Custombutton";
import { Link } from 'react-router-dom'
import Logo from "./forest.png"
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
import Layout from "../../components/Layout";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["GitHub", "Twitter", "Services", "Listed", "Contact"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Link to="https://github.com/Shivam-Katare">
                  {index === 0 && <GitHubIcon />}
                  </Link>
                  <Link to="https://twitter.com/Shivamkatare_27">
                     {index === 1 && <TwitterIcon />}
                  </Link>
                  {index === 2 && <MiscellaneousServicesIcon />}
                  {index === 3 && <ListAltIcon />}
                  {index === 4 && <ContactsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));

  // const NavbarLinksBox = styled(Box)(({ theme }) => ({
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   gap: theme.spacing(3),
  //   [theme.breakpoints.down("md")]: {
  //     display: "none",
  //   },
  // }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    width: "234px",
    position: "absolute",
    top: "-43px",
    left: "111px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <NavbarLogo src={Logo} alt="logo" className="main-logo" />
        </Box>

        {/* <NavbarLinksBox>
          <NavLink variant="body2">Quiz</NavLink>
          <NavLink variant="body2">Facts</NavLink>
          <NavLink variant="body2">Services</NavLink>
          <NavLink variant="body2">Listed</NavLink>
          <NavLink variant="body2">Contact</NavLink>
        </NavbarLinksBox> */}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
         <Link to="/quiz">
          <NavLink variant="body2">Quiz</NavLink>
         </Link>
        
        <Link to="/facts">
           <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Facts"
        />
        </Link>
       
      </Box>
      <Layout />
    </NavbarContainer>
  );
};

export default Navbar;