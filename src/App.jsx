import { useState } from 'react'
import './App.css'
import CvForm from './components/CvForm.jsx'
import Resume from './components/Resume.jsx'
import PersonalDetails from "./components/PersonalDetails";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Neil Gaiman",
    email: "neil.gaiman@mail.co.uk",
    phoneNumber: "+44 781 156 523",
    address: "London, UK",
  });

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  return (
    <>
      <div className="app">
        <div className="CvForm">
          <PersonalDetails
            onChange={handlePersonalInfoChange}
            fullName={personalInfo.fullName}
            email={personalInfo.email}
            phoneNumber={personalInfo.phoneNumber}
            address={personalInfo.address}
          />
        </div>
        < Resume 
          personalDetails={personalInfo}
        />
      </div>
    </>
  )
}

export default App
