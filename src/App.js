import React, { useContext } from "react";
import PageProvider from "./components/page/PageProvider";
import Intro from "./components/Header/Intro";
import PageContext from "./components/page/PageContext";
import Signin from "./components/auth/Signin";
import ExpectingMotherForm from "./components/mother/ExpectingMotherForm";
import Dashboard from "./components/dash/Dashboard";
import AppointmentScheduler from "./components/appoint/Appointments";
import MedicationReminder from "./components/med/MedicationReminder";
import CommunityPage from "./components/comm/CommunityPage";
import BabyProducts from "./components/dash/BabyProducts";
import MomChat from "./components/comm/Momchat";
import PregnancyTracker from "./components/appoint/PregnancyTracker";


function AppContent() {
  const ctx = useContext(PageContext);
  const { currentPage } = ctx;

  const renderPage = () => {
    switch (currentPage) {
      case "intro":
        return <Intro />;
      case "profileSetup":
        return<Signin/>;
      
        case "dashboard":
          return <Dashboard/>;
          case "medremind":
            return <MedicationReminder/>
        case "appointment":
        return <AppointmentScheduler/>
        case "community":
          return <CommunityPage/>
          case "babyproducts":
            return <BabyProducts/>
            case "chatbot":
              return <MomChat/>
              case "tracker":
                return <PregnancyTracker/>
      default:
        return <Intro />;
    }
  };

  return <div>{renderPage()}</div>;
}

function App() {
  return (
    <PageProvider>
      <AppContent /> {/* Wrap everything inside PageProvider */}
    </PageProvider>
  );
}

export default App;
