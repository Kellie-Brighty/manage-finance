import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import { HiOutlineChevronDown } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { GlobalContext } from "../store/context";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "transparent",
    display: "flex",
    marginTop: 62,
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo_box: {
    flexBasis: "20%",
  },
  logo: {
    width: 70,
    height: 70,
    [theme.breakpoints.down("xs")]: {
      width: 45,
      height: 45,
    },
  },
  menu_items: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  menu_item: {
    margin: "0pc 30px",
    cursor: "pointer",
  },
  menu_text: {
    fontSize: 16,
    fontWeight: "400",
  },
  menu_icon: {
    marginLeft: 18,
  },
  call_to_action: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  sign_in: {
    outline: "none",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: "400",
  },
  start_free: {
    outline: "none",
    background: theme.palette.primary.main,
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: 6,
    marginLeft: 30,
    cursor: "pointer",
  },
  sidebar_icon_box: {
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
      fontSize: 40,
      alignSelf: "flex-end",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const { windowDimenion } = useContext(GlobalContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo_box}>
        <img src="logo.png" className={classes.logo} />
      </div>

      <div className={classes.sidebar_icon_box}>
        <AiOutlineMenu />
      </div>
      <div className={classes.menu_items}>
        <div
          className={classes.menu_item}
          style={{ display: "flex", alignItems: "center" }}
        >
          <p className={classes.menu_text}>Product</p>
          <HiOutlineChevronDown className={classes.menu_icon} />
        </div>
        <div
          className={classes.menu_item}
          style={{ display: "flex", alignItems: "center" }}
        >
          <p className={classes.menu_text}>Features</p>
          <HiOutlineChevronDown className={classes.menu_icon} />
        </div>
        <div className={classes.menu_item}>
          <p className={classes.menu_text}>Testimonial</p>
        </div>
        <div className={classes.menu_item}>
          <p className={classes.menu_text}>Blog</p>
        </div>
      </div>

      <div className={classes.call_to_action}>
        <button className={classes.sign_in}>Sign in</button>
        <button className={classes.start_free}>Start Free</button>
      </div>
    </header>
  );
};

export default Header;
