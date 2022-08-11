import React, { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import { GlobalContext } from "../store/context";

const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: 50,
    backgroundColor: "#EEEFFB",
    margin: "0px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: window.innerWidth * 0.721,
    padding: "20px 40px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      textAlign: "center",
      width: "70%",
      margin: "0px auto",
      padding: "50px 40px",
    },
  },
  text: {
    fontSize: 30,
    fontWeight: "600",
    lineHeight: "135.02%",
    width: 641,
    backgroundColor: "transparent",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
      textAlign: "center",
      width: window.innerWidth * 0.7,
    },
  },
  btn_text: {
    fontSize: 18,
    fontWeight: "400",
    outline: "none",
    border: "none",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    padding: "15px 25px",
    borderRadius: 6,
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      textAlign: "center",
      marginTop: 32,
      padding: "15px 35px",
    },
  },
}));

const CryptoPortfolio = () => {
  const classes = useStyles();
  const { windowDimenion } = useContext(GlobalContext);

  return (
    <div className={classes.body}>
      <p className={classes.text}>
        Track your Crypto portfolio in the best possible way
      </p>
      <button className={classes.btn_text}>Check it out</button>
    </div>
  );
};

export default CryptoPortfolio;
