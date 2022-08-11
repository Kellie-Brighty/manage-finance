import React from "react";
import { makeStyles } from "@material-ui/styles";
import { HiOutlineArrowRight } from "react-icons/hi";

const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: 50,
  },
  text_box: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "600",
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
      textAlign: "center",
      margin: "0px auto",
    },
  },
  sub_title: {
    fontSize: 22,
    fontWeight: "500",
    color: "#6B6B6B",
    width: 513,
    margin: "0px auto",
    marginTop: 20,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      width: 350,
      textAlign: "center",
    },
  },
  flex_box: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  box: {
    padding: "30px 20px",
    border: "0.5px solid #D9D9D9",
    maxWidth: window.innerWidth * 0.6,
    margin: "0px 50px",
    [theme.breakpoints.down("xs")]: {
      margin: "20px auto",
    },
    marginTop: 52,
    borderRadius: 6,
  },
  shadowBox: {
    padding: "30px 20px",
    border: "0.5px solid #D9D9D9",
    maxWidth: window.innerWidth * 0.6,
    margin: "0px 50px",
    [theme.breakpoints.down("xs")]: {
      margin: "20px auto",
    },
    marginTop: 52,
    borderRadius: 6,
  },
  img: {
    width: 50,
  },
  box_text: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 37,
  },
  box_subtext: {
    fontSize: 14,
    fontWeight: "400",
    color: "#6B6B6B",
    maxWidth: 269,
    marginTop: 41,
  },
  read_more: {
    display: "flex",
    alignItems: "center",
    fontSize: 14,
    fontWeight: "500",
    color: "#050EE6",
    marginTop: 20,
    cursor: "pointer",
  },
  btn_text: {
    fontSize: 14,
    fontWeight: "600",
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
  btn_box: {
    marginTop: 77,
    [theme.breakpoints.down("xs")]: {
      marginTop: 22.86
    }
  },
}));

const Features = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className={classes.text_box}>
        <div>
          <p className={classes.title}>Mind-blowing Features</p>
          <p className={classes.sub_title}>
            End to end encryption on all our platforms. Meet the right platform
            to help you realize your dream
          </p>

          <div className={classes.flex_box}>
            <div className={classes.box}>
              <img src="progress.png" className={classes.img} />
              <p className={classes.box_text}>Fix working progress</p>
              <p className={classes.box_subtext}>
                End to end encryption on all our platforms. Meet the right
                platform to help you realize your dream
              </p>
              <div className={classes.read_more}>
                <p>Read more</p>
                <HiOutlineArrowRight style={{ marginLeft: 10 }} />
              </div>
            </div>

            <div className={classes.shadowBox}>
              <img src="connect.png" className={classes.img} />
              <p className={classes.box_text}>Connect wallets and exchanges</p>
              <p className={classes.box_subtext}>
                End to end encryption on all our platforms. Meet the right
                platform to help you realize your dream
              </p>
              <div className={classes.read_more}>
                <p>Read more</p>
                <HiOutlineArrowRight style={{ marginLeft: 10 }} />
              </div>
            </div>

            <div className={classes.box}>
              <img src="easy.png" className={classes.img} />
              <p className={classes.box_text}>Save money easily</p>
              <p className={classes.box_subtext}>
                End to end encryption on all our platforms. Meet the right
                platform to help you realize your dream
              </p>
              <div className={classes.read_more}>
                <p>Read more</p>
                <HiOutlineArrowRight style={{ marginLeft: 10 }} />
              </div>
            </div>
          </div>

          <div className={classes.btn_box}>
            <button className={classes.btn_text}>More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
