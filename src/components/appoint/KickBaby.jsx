import React,{useState} from 'react'
import styles from "./PregnancyTracker.module.css";

function KickBaby() {
    const [kickCount, setKickCount] = useState(0);




    return (
      <div className={styles.kickCounter}>
        <h3>👣 Kick Counter</h3>
        <p>Baby Kicks Today: {kickCount}</p>
        <button onClick={() => setKickCount(kickCount + 1)}>+ Add Kick</button>
        <button onClick={() => setKickCount(0)}>Reset</button>
      </div>
    );
    
}

export default KickBaby


