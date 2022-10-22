import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import landingPageImage from "./landingPage.gif";
import CustomButton from "../Dashboard/Custombutton";
import LandingPageNav from "./LandingPageNav";


const LandingPage = () => {
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
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "101vh", marginTop: "0rem" }}>
      <Container>
        <LandingPageNav />
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
              Nature is full of surprises. We invite you to investigate them.
              This website explains many secret facts about nature, and you can
              even play a short quiz game to better understand it.
            </Typography>

            <a href="https://github.com/Shivam-Katare/FactSEA">
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="GitHub Repo"
                heroBtn={true}
                className="custom-button"
              />
            </a>
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={landingPageImage}
              alt="landingPageImage"
              style={{ maxWidth: "100%", marginBottom: "2rem" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default LandingPage;
