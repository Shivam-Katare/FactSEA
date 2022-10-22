import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./DashboardNavbar";
import DashboardImg from "./dashboard.gif";
import CustomButton from "./Custombutton";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to "FACT SEA"
            </Typography>
            <Title variant="h1">
              Explore the facts and Secrets of Nature.
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              NATURE hides many things from us! It's your chance to understand nature more 
              deeply. Read facts, play a small quiz game and understand the your "NATURE."
            </Typography>

          <Link to="/strange">
             <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Strange Images"
                heroBtn={true}
                className="custom-button"
                width="165px"
                fontSize="15px"
              />
          </Link>
         
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={DashboardImg}
              alt="heroImg"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Dashboard;