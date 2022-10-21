import React from 'react'
import Settings from "./pages/Settings";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system"
import Image from "./pages/e.png"
function Quiz() {

  const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height: `45.6rem`,
        marginTop: `-3rem`,
    }
};
  return (

    <div classname="quiz-body" style={styles.paperContainer}>

       <Container maxWidth="sm" maxHeight= "auto">
      <Box textAlign="center" mt={5}>
      <Typography variant="h2" fontWeight="bold">
              Nature Quiz
            </Typography> 
            <Settings />
      </Box>
    </Container>
    </div>
    
   
  )
}

export default Quiz