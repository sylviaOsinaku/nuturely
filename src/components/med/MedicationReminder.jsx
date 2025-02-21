import React, { useState, useEffect ,useContext} from 'react';
import styles from './MedicationReminder.module.css';
import PageContext from "../page/PageContext";
const MedicationReminder = () => {
    const ctx = useContext(PageContext)
    const {changePage} = ctx
  const [medications, setMedications] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMedication, setSelectedMedication] = useState(null);

  useEffect(() => {
    // Simulating fetching medication data from an API
    const fetchedMedications = [
      {
        userId: 1,
        medication: "Prenatal Vitamins",
        schedule: "08:00 AM",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
      },
      {
        userId: 1,
        medication: "Iron Supplements",
        schedule: "02:00 PM",
        days: ["Monday", "Wednesday", "Friday"]
      }
    ];
    setMedications(fetchedMedications);
  }, []);

  const handleMarkAsTaken = (medication) => {
    setSelectedMedication(medication);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.container}>
      <h2>Your Medication Reminders</h2>
      <div className={styles.reminders}>
        {medications.length === 0 ? (
          <p>No medication reminders available.</p>
        ) : (
          medications.map((med, index) => (
            <div key={index} className={styles.reminderCard}>
              <h3>{med.medication}</h3>
              <p><strong>Time:</strong> {med.schedule}</p>
              <p><strong>Days:</strong> {med.days.join(", ")}</p>
              <button onClick={() => handleMarkAsTaken(med)}>Mark as Taken</button>
            </div>
          ))
        )}
      </div>

      {/* Popup */}
      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <h3>Good Job, Mama! 🎉</h3>
            <p>You've taken your <strong>{selectedMedication.medication}</strong> for today.</p>
            <p>Remember, every little step counts towards a healthy journey for you and your baby. 💕</p>
            <button className={styles.closeButton} onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
<button onClick={() => changePage("dashboard")}>Back</button>
    </div>
  );
};

export default MedicationReminder;
