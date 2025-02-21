import React, { useState, useEffect, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getAISuggestions2 } from "../utils/aiServices"; // AI-powered tips
import PageContext from "../page/PageContext";
import styles from "./PregnancyTracker.module.css";
import KickBaby from "./KickBaby";
import BabyNames from "./BabyNames";
import MoodTracker from "./MoodTracker";
import BabyGrowthVisualization from "./BabyGrowth";

const milestones = [
  { week: 4, title: "Your Baby is a Poppy Seed 🌱", tip: "Take prenatal vitamins and start a healthy diet." },
  { week: 12, title: "Your Baby is a Plum 🍑", tip: "Your first ultrasound is coming up!" },
  { week: 20, title: "Your Baby is a Banana 🍌", tip: "You're halfway there! Time for a gender reveal?" },
  { week: 28, title: "Your Baby is an Eggplant 🍆", tip: "Your third trimester begins. Keep moving!" },
  { week: 36, title: "Your Baby is a Watermelon 🍉", tip: "Almost there! Prepare your hospital bag." },
  { week: 40, title: "Baby is Here! 👶", tip: "Congratulations, Mama! Your journey begins!" }
];

const PregnancyTracker = () => {
  const ctx = useContext(PageContext);
  const { changePage } = ctx;
  const [week, setWeek] = useState(4);
  const [milestone, setMilestone] = useState(milestones[0]);
  const [aiTip, setAiTip] = useState("Loading AI insights...");
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const foundMilestone = milestones.find(m => week >= m.week) || milestones[0];
    setMilestone(foundMilestone);

    // Fetch AI-generated tips dynamically
    getAISuggestions2(week).then(tip => setAiTip(tip));
  }, [week]);

  return (
    <div className={styles.trackerContainer}>
      <h2 className={styles.trackerTitle}>📊 Track Your Pregnancy Progress</h2>

      {/* Progress Bar */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${(week / 40) * 100}%` }}></div>
        </div>
        <p className={styles.weekText}>Week {week} of 40</p>
      </div>

      {/* Milestone Update */}
      <div className={styles.milestoneCard}>
        <h3>{milestone.title}</h3>
        <p>{milestone.tip}</p>
      </div>

      {/* AI-Powered Insights */}
      <div className={styles.aiTip}>
        <h4>🤖 AI Insight:</h4>
        <p>{aiTip}</p>
      </div>

      {/* Baby Growth Visualization */}
      <div className={styles.babyGrowth}>
        <BabyGrowthVisualization week={week} />
      </div>

      {/* Calendar */}
      <div className={styles.calendarSection}>
        <h3>📅 Track Your Appointments</h3>
        <Calendar onChange={setSelectedDate} value={selectedDate} />
        <p>Selected Date: {selectedDate.toDateString()}</p>
      </div>

      {/* Navigation Buttons */}
      <div className={styles.controls}>
        <button onClick={() => setWeek(prev => Math.max(4, prev - 1))}>◀ Previous Week</button>
        <button onClick={() => setWeek(prev => Math.min(40, prev + 1))}>Next Week ▶</button>
      </div>
      <button onClick={() => changePage("dashboard")}>Back</button>
    </div>
  );
};

export default PregnancyTracker;
