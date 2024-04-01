import { useState } from 'react'
import './App.css'
import CvForm from './components/CvForm.jsx'
import Resume from './components/Resume.jsx'
import PersonalDetails from "./components/PersonalDetails";
import EducationDetails from "./components/EducationDetails";

function App() {

  const exampleData = {
    fullName: "Nathan Joel",
    email: "nathanjoeldev@gmail.com",
    phoneNumber: "+44 7519 197540",
    github: "https://github.com/NafanJ",
    degree: "Software Engineering with Placement (BEng)",
    school: "Queen's University Belfast",
    location: "Belfast, UK",
    startDate: "Sept '17",
    endDate: "Jun '21",
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
            github: "",
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
            github={personalInfo.github}
          />
          <EducationDetails
            onChange={handlePersonalInfoChange}
            school={personalInfo.school}
            degree={personalInfo.degree}
            startDate={personalInfo.startDate}
            endDate={personalInfo.endDate}
            location={personalInfo.location}
          />
        </div>
        < Resume 
          personalDetails={personalInfo}
        />
      </div>
  )
}

export default App
