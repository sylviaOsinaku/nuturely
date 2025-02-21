import { useState, useEffect, useContext } from "react";
import styles from "./ExpectingMotherForm.module.css";
import PageContext from "../page/PageContext";

const ExpectingMotherForm = ({ onNext }) => {
  const ctx = useContext(PageContext);
  const { changePage } = ctx;

  const [trimester, setTrimester] = useState("");
  const [babySex, setBabySex] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tip, setTip] = useState("");

  // Smart automation: Dynamic tips based on trimester
  useEffect(() => {
    const tips = {
      "1st Trimester": "Stay hydrated and take folic acid daily! 🌱",
      "2nd Trimester": "Time to start feeling those little kicks! 👶✨",
      "3rd Trimester": "Get ready! Your baby will be here soon! 🍼💖",
    };
    setTip(tips[trimester] || "");
  }, [trimester]);

 
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tell us about your pregnancy 🤰</h2>

      <form  className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Which trimester are you in?</label>
          <select value={trimester} onChange={(e) => setTrimester(e.target.value)} required>
            <option value="" disabled>Select trimester</option>
            <option value="1st Trimester">1st Trimester</option>
            <option value="2nd Trimester">2nd Trimester</option>
            <option value="3rd Trimester">3rd Trimester</option>
          </select>
        </div>

        {tip && <p className={styles.tip}>{tip}</p>}

        <div className={styles.inputGroup}>
          <label>Do you know your baby's sex?</label>
          <select value={babySex} onChange={(e) => setBabySex(e.target.value)} required>
            <option value="" disabled>Select an option</option>
            <option value="Boy">Boy</option>
            <option value="Girl">Girl</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label>Expected Due Date:</label>
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
        </div>

        <button type="submit" className={styles.button} onClick={()=> changePage("dashboard")} >Next ➜</button>
      </form>
    </div>
  );
};

export default ExpectingMotherForm;
