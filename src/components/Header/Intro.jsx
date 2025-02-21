import React, { useContext } from "react";
import nuturelyLogo from "../../assets/images/nuturelylogo.svg";
import PageContext from "../page/PageContext";
import classes from "./Intro.module.css"; // Importing CSS module

function Intro() {
  const ctx = useContext(PageContext);
  const { changePage } = ctx;

  return (
    <div className={classes.introContainer}>
      <img src={nuturelyLogo} alt="Nurturely Logo" className={classes.logo} />

      <h1>Welcome to Nurturely</h1>
      <p>Your trusted pregnancy & motherhood companion.</p>

      <button className={classes.button} onClick={() => changePage("profileSetup")}>
        Let’s Get to Know You
      </button>
    </div>
  );
}

export default Intro;
