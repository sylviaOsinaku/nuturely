import { getBabyNames } from "../utils/aiServices"; // AI-powered name generator
import React,{useState} from 'react'
import styles from "./PregnancyTracker.module.css";



function  BabyNames(){
    const [babyName, setBabyName] = useState("");
    const [theme, setTheme] = useState("classic");
    
    const handleGenerateName = async () => {
      const name = await getBabyNames(theme);
      setBabyName(name);
    };
    
    return (
      <div className={styles.babyNameSection}>
        <h3>🔠 AI Baby Name Generator</h3>
        <select onChange={(e) => setTheme(e.target.value)}>
          <option value="classic">Classic</option>
          <option value="modern">Modern</option>
          <option value="unique">Unique</option>
          <option value="cultural">Cultural</option>
        </select>
        <button onClick={handleGenerateName}>Generate Name</button>
        {babyName && <p>✨ Suggested Name: {babyName}</p>}
      </div>
    );
}


export default BabyNames