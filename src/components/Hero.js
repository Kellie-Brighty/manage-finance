import React from "react";
import { makeStyles } from "@material-ui/styles";
import { HiOutlineArrowRight } from "react-icons/hi";

const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: 88,
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  hero_flex_one: {},
  hero_main_text: {
    fontSize: 55,
    fontWeight: "600",
    width: 555,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      fontSize: 30,
      width: window.innerWidth * 0.918,
      lineHeight: "36.31px",
      margin: "0px auto",
    },
  },
  colored_text: {
    color: theme.palette.primary.main,
  },
  sub_text: {
    color: theme.palette.otherColors.text_ash,
    fontSize: 14,
    fontWeight: "400",
    width: 507,
    lineHeight: "200.52%",
    marginTop: 35.59,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      fontSize: 12,
      width: window.innerWidth * 0.876,
      lineHeight: "145%",
      margin: "0px auto",
      marginTop: 40,
    },
  },
  get_started_btn: {
    background: theme.palette.primary.main,
    outline: "none",
    borderRadius: 6,
    border: "none",
    display: "flex",
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    alignItems: "center",
    padding: 15,
    marginTop: 40.41,
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      width: window.innerWidth * 0.39,
      margin: "0px auto",
      marginTop: 40,
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      fontSize: 15,
      fontWeight: "light",
    },
  },
  btn_icon: {
    background: "transparent",
    marginLeft: 27,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  people: {
    marginTop: 75.46,
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  people_img: {
    width: 305,
  },
  text_one: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "400",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  text_two: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "400",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  hero_flex_two: {
    marginTop: 40,
  },
  play_img: {
    width: 190.86,
    [theme.breakpoints.down("xs")]: {
      width: window.innerWidth * 0.272,
    },
  },
  images_flex: {
    display: "flex",
  },
  red_arrow: {
    width: 151,
    marginTop: 87,
    [theme.breakpoints.down("xs")]: {
      width: window.innerWidth * 0.215,
    },
  },
  social: {
    width: 40,
    marginTop: 28,
    [theme.breakpoints.down("xs")]: {
      width: window.innerWidth * 0.08,
    },
  },
  hero_flex_three: {},
  pix: {
    width: 465.67,
    marginTop: -54,
    [theme.breakpoints.down("xs")]: {
      width: window.innerWidth * 0.6,
      marginTop: 0,
    },
  },
  two_right_boxes: {
    display: "flex",
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className={classes.hero_flex_one}>
        <p className={classes.hero_main_text}>
          Managing{" "}
          <span className={classes.colored_text}>business payments</span> made
          easy
        </p>

        <p className={classes.sub_text}>
          Make the allow of the approximate mapple application of the
          interaction supply and attraction with social interlocking wave of
          proximity in the sachet water format of the website allacrity funnel
          sumptous
        </p>

        <button className={classes.get_started_btn}>
          Get Started
          <HiOutlineArrowRight className={classes.btn_icon} />
        </button>

        <div className={classes.people}>
          <img src="people.png" className={classes.people_img} />
        </div>
        <p className={classes.text_one}>
          15,000+ people already joined the community.
        </p>
        <p className={classes.text_two}>Get started today.</p>
      </div>

      <div className={classes.two_right_boxes}>
        <div className={classes.hero_flex_two}>
          <img src="play.png" className={classes.play_img} />
          <div className={classes.images_flex}>
            <img src="red_arrow.png" className={classes.red_arrow} />
            <img src="social.png" className={classes.social} />
          </div>
        </div>

        <div className={classes.hero_flex_three}>
          <img src="pix.png" className={classes.pix} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
