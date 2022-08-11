import React from "react";
import "./App.css";
import Header from "./components/Header";
import { GlobalProvider } from "./store/context";
import { makeStyles } from "@material-ui/styles";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import HelpBusiness from "./components/HelpBusiness";
import CryptoPortfolio from "./components/CryptoPortfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import Features from "./components/Features";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "0px 85px",
    paddingBottom: 100,
    [theme.breakpoints.down("xs")]: {
      padding: "0px 27px",
      paddingBottom: 100,
    },
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <GlobalProvider>
        <Header />
        <Hero />
        <Trusted />
        <HelpBusiness />
        <CryptoPortfolio />
        <WhyChooseUs />
        <Features />
      </GlobalProvider>
    </div>
  );
};

export default App;
