import { useEffect, useState, useContext } from "react";
import styles from "./Dashboard.module.css";
import { getHealthTip, getBabySupplies, assessShoppingNeeds } from "../utils/aiServices";
import { getPregnancyMilestone } from "../utils/milestones";
import PageContext from "../page/PageContext";

const Dashboard = () => {
  const ctx = useContext(PageContext);
  const { changePage } = ctx;
  const [greeting, setGreeting] = useState("");
  const [healthTip, setHealthTip] = useState("");
  const [babySupplies, setBabySupplies] = useState([]);
  const [milestone, setMilestone] = useState("");
  const [shoppingRecommendation, setShoppingRecommendation] = useState("");

  // User's Pregnancy Data
  const user = {
    name: "Kemi",
    trimester: "3rd Trimester",
    week: 36,
    dueDate: "2025-04-10",
    healthStatus: "tired", // Simulating health input (healthy, moderate, tired)
  };

  // Determine Greeting Based on Time
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning, Mama Kemi! 🌅");
    else if (hour < 18) setGreeting("Good afternoon, Mama Kemi! 🌞");
    else setGreeting("Good evening, Mama Kemi! 🌙");
  }, []);

  // Fetch AI-Powered Insights
  useEffect(() => {
    setHealthTip(getHealthTip(user.trimester));
    setBabySupplies(getBabySupplies(user.trimester));
    setMilestone(getPregnancyMilestone(user.week));
    setShoppingRecommendation(assessShoppingNeeds(user.healthStatus));
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.greeting}>{greeting} 💖</h2>
        <p className={styles.info}>
          You're in your <strong>{user.trimester}</strong>, Week <strong>{user.week}</strong>.
          Your due date is <span className={styles.dueDate}>{new Date(user.dueDate).toLocaleDateString()}</span>. 🌸
        </p>
      </header>

      <div className={styles.grid}>
        <button className={styles.card} onClick={() => changePage('appointment')}>
          <span className={styles.icon}>📅</span>
          <span className={styles.cardText}>Schedule Appointments</span>
        </button>
        <button className={styles.card} onClick={() => changePage('community')}>
          <span className={styles.icon}>👩‍👩‍👧‍👧</span>
          <span className={styles.cardText}>Join the Mama Community</span>
        </button>
        <button className={styles.card} onClick={() => changePage('tracker')}>
          <span className={styles.icon}>📊</span>
          <span className={styles.cardText}>Track Your Pregnancy Progress</span>
        </button>
        <button className={styles.card} onClick={() => changePage('babyproducts')}>
          <span className={styles.icon}>🛍️</span>
          <span className={styles.cardText}>Shop Baby Essentials</span>
        </button>
        <button className={styles.card} onClick={() => changePage('medremind')}>
          <span className={styles.icon}>💊</span>
          <span className={styles.cardText}>Medication Reminder</span>
        </button>
        <button className={styles.card} onClick={() => changePage('chatbot')}>
          <span className={styles.icon}>🤖</span>
          <span className={styles.cardText}>AI Chat Bot</span>
        </button>
      </div>

      <div className={styles.aiSection}>
        <h3 className={styles.aiTitle}>✨ This Week’s Milestone</h3>
        <p>{milestone}</p>
      </div>

      <div className={styles.aiSection}>
        <h3 className={styles.aiTitle}>💡 Health Tip for You</h3>
        <p>{healthTip}</p>
      </div>

      <div className={styles.aiSection}>
        <h3 className={styles.aiTitle}>🛍️ Baby Supplies</h3>
        <ul className={styles.supplyList}>
          {babySupplies.map((item, index) => (
            <li key={index} className={styles.supplyItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.aiSection}>
        <h3 className={styles.aiTitle}>🛒 Shopping Recommendation</h3>
        <p>{shoppingRecommendation}</p>
      </div>
    </div>
  );
};

export default Dashboard;
