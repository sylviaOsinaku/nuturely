import React, { useContext, useState } from "react";
import PageContext from "../page/PageContext";
import classes from "./Signin.module.css";
 import nursingMother from "../../assets/images/nursingmother.svg";
 import doctor from "../../assets/images/doc.svg";
import expectingMother from "../../assets/images/expectantmother.svg";

function Signin() {
  const ctx = useContext(PageContext);
  const { changePage } = ctx;  // Ensure this is defined in the context
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    
    if (!selectedOption) {
      alert("Please select an option");
      return;  // Don't continue if nothing is selected
    }

    // Pass selectedOption to the next page or use it for more logic
    console.log("Selected Option:", selectedOption);
    
    // Navigate to the next page (assuming 'knowingyou' is the next page)
    changePage("knowingyou"); // Ensure this changePage function works properly in context
  };

  return (
    <div className={classes.signinContainer}>
      <h1>Getting Started</h1>
      <p>A personalized experience just for you</p>

      <form onSubmit={handleSubmit}>
        <div
          className={classes.userOption}
          onClick={() => setSelectedOption("nursing")}
        >
          <img src={nursingMother} alt="Nursing mother" />
          <div className={classes.userInfo}>
            <label>Nursing Mother</label>
            <p>You currently have a baby.</p>
          </div>
          <input
            type="radio"
            name="userType"
            checked={selectedOption === "nursing"}
            readOnly
          />
        </div>

        <div
          className={classes.userOption}
          onClick={() => setSelectedOption("expecting")}
        >
          <img src={expectingMother} alt="Expecting mother" />
          <div className={classes.userInfo}>
            <label>Expecting Mother</label>
            <p>You are currently pregnant.</p>
          </div>
          <input
            type="radio"
            name="userType"
            checked={selectedOption === "expecting"}
            readOnly
          />
        </div>

        <div
          className={classes.userOption}
          onClick={() => setSelectedOption("doctor")}
        >
          <img src={ doctor} alt="Doctor" />
          <div className={classes.userInfo}>
            <label>Healthcare Professional</label>
            <p>You provide medical care for mothers and babies.</p>
          </div>
          <input
            type="radio"
            name="userType"
            checked={selectedOption === "doctor"}
            readOnly
          />
        </div>

        <button
          type="button"
          className={`${classes.button} ${classes.guestButton}`}
          onClick={() => {
            // Optional: If you want to handle the guest login separately, 
            // ensure it triggers any relevant guest logic
            alert("Guest Login");
          }}
        >
          Login as Guest
        </button>

        <button
          type="button"
          className={classes.button}
          onClick={() => {
            // Optional: If you want to handle the guest login separately, 
            // ensure it triggers any relevant guest logic
            changePage("dashboard")
          }}
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default Signin;
