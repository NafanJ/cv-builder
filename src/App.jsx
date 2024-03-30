import { useState } from 'react'
import './App.css'
import CvForm from './components/CvForm.jsx'
import Resume from './components/Resume.jsx'
import PersonalDetails from "./components/PersonalDetails";

function App() {

  const exampleData = {
    fullName: "Neil Gaiman",
    email: "neil.gaiman@mail.co.uk",
    phoneNumber: "+44 781 156 523",
    address: "London, UK",
    degree: "Bachelors in Economics",
    school: "London City University",
    location: "New York City, US",
    startDate: "08/2018",
    endDate: "present",
    }

  const [personalInfo, setPersonalInfo] = useState(exampleData);

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  return (
      <div className="app">
        <div className="CvForm">
        <button className="button" onClick={() => 
          setPersonalInfo({
            fullName: "",
            email: "",
            phoneNumber: "",
            address: "",
            degree: "",
            school: "",
            location: "",
            startDate: "",
            endDate: "",
          })
        }>Clear</button>
        <button className="button" onClick={() => 
          setPersonalInfo(exampleData)
        }>Load Example Data</button>
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
  )
}

export default App
