export const getHealthTip = (trimester) => {
    const tips = {
      "1st Trimester": "Eat nutritious foods and stay hydrated! 🌱",
      "2nd Trimester": "Exercise lightly and track fetal movements. 🤰",
      "3rd Trimester": "Rest well and prepare your hospital bag! 🏥👜",
    };
    return tips[trimester] || "Stay healthy and enjoy your pregnancy! 💖";
  };
  // utils/aiServices.js

export const getAISuggestions = (postTitle) => {
  // Simulating AI-generated responses
  const suggestions = {
    "I Need Help with My Baby’s Sleep Schedule": [
      "Try playing white noise in the background to help your baby sleep.",
      "Establish a consistent bedtime routine to improve sleep patterns."
    ],
    "Best Foods During Pregnancy": [
      "Avocados, nuts, and lean proteins are great for pregnancy nutrition!",
      "Stay hydrated and eat foods rich in folic acid like spinach and beans."
    ]
  };

  return suggestions[postTitle] || ["This is a great topic! What do others think?"];
};

  export const getBabySupplies = (trimester) => {
    const supplies = {
      "1st Trimester": ["Prenatal vitamins", "Healthy snacks", "Comfortable clothes"],
      "2nd Trimester": ["Maternity pillows", "Baby clothes", "Diaper bag"],
      "3rd Trimester": ["Hospital bag", "Newborn diapers", "Baby car seat"],
    };
    return supplies[trimester] || [];
  };
  
  export const assessShoppingNeeds = (healthStatus) => {
    if (healthStatus === "healthy") return "You are fit to go shopping! Don't forget to take breaks. 🛍️";
    if (healthStatus === "moderate") return "Consider taking a friend with you for assistance. 👭";
    return "You might need a shopping assistant or online delivery. Take care! ❤️";
  };
  

  // Example of a function that fetches recommended doctor using AI
export const getRecommendedDoctor = (userHealthStatus) => {
  // AI Algorithm to match doctor based on user's health condition
  const doctors = [
    { id: 1, name: 'Dr. Aisha', specialty: 'Gynecology' },
    { id: 2, name: 'Dr. Kofi', specialty: 'Pediatrics' },
    { id: 3, name: 'Dr. Emeka', specialty: 'General Medicine' },
  ];

  return doctors.find(doctor => doctor.specialty.toLowerCase() === userHealthStatus.toLowerCase());
};

// Example function to fetch available appointment slots for a doctor
export const getAvailableSlots = (doctorId) => {
  const doctorAppointments = {
    2: [
      { id: 1, date: '2025-03-10T10:00:00', status: 'confirmed' },
      { id: 2, date: '2025-03-17T11:00:00', status: 'pending' },
    ],
    1: [
      { id: 3, date: '2025-03-12T09:00:00', status: 'pending' },
    ],
  };
  
  return doctorAppointments[doctorId] || [];
};

// AI Video Resources based on appointment type
export const getAppointmentVideoResources = (type) => {
  const resources = {
    "antenatal checkup": "hhttps://www.youtube.com/watch?v=wt9-6VWbfHI",
    "follow-up appointment": "https://www.youtube.com/watch?v=Gx1LwrJ9Yc8&pp=ygUOI3ByZWduYW5jeWludWs%3D",
  };

  return resources[type] || "hhttps://www.youtube.com/watch?v=wt9-6VWbfHI";
};


export const getAISuggestions2 = async (week) => {
  const aiTips = {
    4: "Morning sickness? Try ginger tea and eat small, frequent meals.",
    12: "Your baby is developing tiny fingernails! Stay hydrated and eat iron-rich foods.",
    20: "Feeling kicks? Talk to your baby to build a bond!",
    28: "Your third trimester is here. Rest often and practice breathing exercises.",
    36: "Pack your hospital bag and prepare for labor signs.",
    40: "Due date approaching! Stay calm, hydrate, and listen to your doctor."
  };

  return aiTips[week] || "Stay healthy and enjoy your journey!";
};


export const getBabyNames = async (theme) => {
  const nameSuggestions = {
    classic: ["James", "Elizabeth", "William", "Catherine"],
    modern: ["Aiden", "Zara", "Kai", "Nova"],
    unique: ["Zephyr", "Orion", "Lumi", "Sage"],
    cultural: ["Oluchi (Igbo)", "Ayo (Yoruba)", "Kwame (Ghanaian)", "Fatima (Arabic)"]
  };

  return nameSuggestions[theme][Math.floor(Math.random() * 4)];
};
