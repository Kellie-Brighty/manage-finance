import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "400",
    textAlign: "center",
    width: window.innerWidth * 0.3,
    margin: "0px auto",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
      fontWeight: "600",
      width: window.innerWidth * 0.7,
      margin: "0px auto",
    },
  },
  sub_text: {
    fontSize: 22,
    fontWeight: "500",
    color: "#6B6B6B",
    marginTop: 15,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      fontWeight: "500",
    },
  },
  box_div: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  box: {
    padding: 40,
    border: "0.5px solid rgb(234, 234, 234)",
    maxWidth: window.innerWidth * 0.6,
    margin: "0px 50px",
    [theme.breakpoints.down("xs")]: {
      margin: "20px auto",
    },
  },
  img: {
    width: 60,
  },
  box_text: {
    marginTop: 45,
  },
  box_subtext: {
    maxWidth: 219,
    marginTop: 12,
  },
}));

const HelpBusiness = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div>
        <p className={classes.title}>How can we help your business?</p>
        <p className={classes.sub_text}>
          when you soar, you build people and society.
        </p>

        <div className={classes.box_div}>
          <div className={classes.box}>
            <img src="search.png" className={classes.img} />
            <p className={classes.box_text}>Find out what you need</p>
            <p className={classes.box_subtext}>we present you the neccesary information to get started</p>
          </div>
          <div className={classes.box}>
            <img src="settings.png" className={classes.img} />
            <p className={classes.box_text}>Work out the details</p>
            <p className={classes.box_subtext}>Use the assistance to make the required work</p>
          </div>
          <div className={classes.box}>
            <img src="rocket.png" className={classes.img} />
            <p className={classes.box_text}>Get to work fast</p>
            <p className={classes.box_subtext}>finalize your learning process and applicate them in place</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpBusiness;
