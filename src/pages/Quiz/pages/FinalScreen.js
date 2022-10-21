import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { handleAmountChange, handleScoreChange } from "../../../redux/actions";
import { Link } from "react-router-dom";
import Image from "./e.png"

const FinalScreen = () => {
  const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        textAlign: `center`,
        height: `44.6rem`
    },
    buttonStyling: {
      margin: "28px",
      fontSize: "18px",
      color: "black",
      fontWeight: "bold",
    }
};
  const disptach = useDispatch();
  const history = useNavigate();
  const { score } = useSelector((state) => state);

  const handleBackToSettings = () => {
    disptach(handleScoreChange(0));
    disptach(handleAmountChange(50));
    history("/quiz");
  };

  return (
    <Box mt={1} style={styles.paperContainer}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score}
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined" style={styles.buttonStyling}>
        Quiz Again!
      </Button>
      <Link to="/">
         <Button variant="outlined" style={styles.buttonStyling}>
        Dashboard
      </Button>
      </Link>
     
    </Box>
  );
};

export default FinalScreen;
