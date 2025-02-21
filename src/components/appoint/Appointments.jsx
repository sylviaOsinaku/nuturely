import React, { useState, useEffect,useContext } from 'react';
import { getRecommendedDoctor, getAvailableSlots, getAppointmentVideoResources } from '../utils/aiServices';
import styles from './Appointments.module.css';
import PageContext from "../page/PageContext";

const AppointmentScheduler = () => {
    const ctx = useContext(PageContext);
  const { changePage } = ctx;
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [videoResource, setVideoResource] = useState('');
  const [status, setStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Simulating user health status (this will come from the user's medical record)
  const userHealthStatus = "Gynecology"; // e.g., "Gynecology", "Pediatrics", etc.

  useEffect(() => {
    // Get the best doctor using AI
    const recommendedDoctor = getRecommendedDoctor(userHealthStatus);
    setDoctor(recommendedDoctor);

    // Fetch available appointment slots for this doctor
    const availableAppointments = getAvailableSlots(recommendedDoctor.id);
    setAppointments(availableAppointments);

    // Get video resources based on the appointment type
    const videoURL = getAppointmentVideoResources("antenatal checkup"); // Use dynamic type based on user input
    setVideoResource(videoURL);
  }, [userHealthStatus]);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    return new Date(date).toLocaleString('en-US', options);
  };

  const handleBookAppointment = (date) => {
    // Simulating the booking process
    setStatus(`Appointment booked for ${formatDate(date)}`);
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.date === date ? { ...appointment, status: "confirmed" } : appointment
      )
    );

    // Show the popup after booking
    setSelectedAppointment(date);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.container}>
      <h2>Schedule Your Appointment</h2>
      {doctor && (
        <div className={styles.doctorInfo}>
          <h3>Doctor: {doctor.name}</h3>
          <p>Specialty: {doctor.specialty}</p>
        </div>
      )}

      <div className={styles.appointments}>
        <h4>Your Available Appointment Slots</h4>
        {appointments.length === 0 ? (
          <p>No available appointments at the moment.</p>
        ) : (
          appointments.map((appointment) => (
            <div key={appointment.id} className={styles.appointmentCard}>
              <p>Date: {formatDate(appointment.date)}</p>
              <p>Status: {appointment.status}</p>
              {appointment.status === 'pending' && (
                <button onClick={() => handleBookAppointment(appointment.date)}>
                  Book Now
                </button>
              )}
            </div>
          ))
        )}
      </div>

      <div className={styles.videoResource}>
        <h4>Video Resources for Your Appointment</h4>
        <a href={videoResource} target="_blank" rel="noopener noreferrer">
          Watch here
        </a>
      </div>

      {status && <p className={styles.statusMessage}>{status}</p>}

      {/* Popup */}
      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <h3>You're All Set!</h3>
            <p>Your appointment has been confirmed for <strong>{formatDate(selectedAppointment)}</strong>.</p>
            <p>Exciting times ahead, Mama! 🎉 Here's a tip: Stay hydrated, and take some time to relax before your appointment. You're doing great!</p>
            <button className={styles.closeButton} onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      <button onClick={()=> changePage("dashboard")}>Back </button>
    </div>
  );
};

export default AppointmentScheduler;
