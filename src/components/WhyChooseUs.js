import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: 50,
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      width: "90%",
      margin: "0px auto"
    },
  },
  image_box: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  img: {
    width: 650,
    [theme.breakpoints.down("xs")]: {
      width: 350,
    },
  },
  second_box: {
    marginTop: 94,
    marginLeft: 39,
    [theme.breakpoints.down("xs")]: {
      order: -1,
      textAlign: "center",
      marginLeft: 0
    },
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  sub_title: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "400",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      fontWeight: "400",
      textAlign: 'center'
    },
  },
  divider: {
    height: 0.5,
    background: "rgb(234, 234, 234)",
    width: 465,
    marginTop: 28,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  selects: {
    marginTop: 30,
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
    },
  },
  select: {
    display: "flex",
    alignItems: "center",
    margin: "20px 0px",
  },
  checked: {
    width: 26,
    [theme.breakpoints.down("xs")]: {
      width: 17,
    },
  },
  checked_text: {
    fontSize: 18,
    fontWeight: "400",
    marginLeft: 17.18,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
}));

const WhyChooseUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className={classes.image_box}>
        <img src="image.png" className={classes.img} />
      </div>

      <div className={classes.second_box}>
        <p className={classes.title}>Why choose us?</p>
        <p className={classes.sub_title}>
          End to end encryption on all our platforms. Meet the right platform to
          help you realize your dream
        </p>
        <div className={classes.divider} />

        <div className={classes.selects}>
          <div className={classes.select}>
            <img src="checked.png" className={classes.checked} />
            <p className={classes.checked_text}>
              Deposit in less than 2 minutes
            </p>
          </div>
          <div className={classes.select}>
            <img src="checked.png" className={classes.checked} />
            <p className={classes.checked_text}>Get overview in a glance</p>
          </div>
          <div className={classes.select}>
            <img src="checked.png" className={classes.checked} />
            <p className={classes.checked_text}>
              Make withdrawals with appropriate support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
