import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: 76.54,
  },
  body_heading: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      width: window.innerWidth * 0.917,
    },
  },
  body_images: {
    marginTop: 50,
    border: "none",
    borderTop: "1px solid rgba(203, 202, 202, 0.35)",
    borderBottom: "1px solid rgba(203, 202, 202, 0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: window.innerWidth * 0.684,
    flexDirection: "row",
    margin: "0px auto",
    [theme.breakpoints.down("xs")]: {
      maxWidth: window.innerWidth * 0.917,
      display: "none"
    },
  },
  body_img: {
    width: 80.85,
    margin: "40px 40px",
    flex: "100%",
    [theme.breakpoints.down("xs")]: {
      flex: "50%",
      flexBasis: "100%"
    },
  },
}));

const Trusted = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <p className={classes.body_heading}>
        Trusted by over 200+ Startups and Freelance business
      </p>

      <div className={classes.body_images}>
        <div>
            <img src="airBNB.png" className={classes.body_img} />
        </div>
        <div>
            <img src="hubspot.png" className={classes.body_img} />
        </div>
        <div>
            <img src="google.png" className={classes.body_img} />
        </div>
        <div>
            <img src="microsoft.png" className={classes.body_img} />
        </div>
        <div>
            <img src="walmart.png" className={classes.body_img} />
        </div>
        <div>
            <img src="fedex.png" className={classes.body_img} />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
