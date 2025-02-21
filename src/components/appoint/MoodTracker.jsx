import React,{useState} from 'react'
import styles from "./PregnancyTracker.module.css";

function MoodTracker() {
    const [moods, setMoods] = useState([]);
    const [selectedMood, setSelectedMood] = useState("");
    
    const handleMoodSubmit = () => {
      if (!selectedMood) return;
      setMoods([...moods, { mood: selectedMood, date: new Date().toLocaleDateString() }]);
      setSelectedMood("");
    };
    
    return (
      <div className={styles.moodTracker}>
        <h3>🎭 Mood Tracker</h3>
        <select onChange={(e) => setSelectedMood(e.target.value)} value={selectedMood}>
          <option value="">Select Mood</option>
          <option value="😊 Happy">😊 Happy</option>
          <option value="😴 Tired">😴 Tired</option>
          <option value="🤰 Excited">🤰 Excited</option>
          <option value="🥺 Emotional">🥺 Emotional</option>
          <option value="😞 Anxious">😞 Anxious</option>
        </select>
        <button onClick={handleMoodSubmit}>Log Mood</button>
    
        <h4>📅 Mood History</h4>
        <ul>
          {moods.map((entry, index) => (
            <li key={index}>{entry.date} - {entry.mood}</li>
          ))}
        </ul>
      </div>
    );
    
}

export default MoodTracker