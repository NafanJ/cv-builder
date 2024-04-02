import { useState } from 'react';
import './App.css';
import CvForm from './components/CvForm.jsx';
import Resume from './components/Resume.jsx';
import PersonalDetails from "./components/PersonalDetails";
import EducationDetails from "./components/EducationDetails";

function App() {

  const exampleData = {
    fullName: "Nathan Joel",
    jobTitle: "Software Engineer",
    email: "nathanjoeldev@gmail.com",
    phoneNumber: "+44 7519 197540",
    github: "NafanJ",
    degree: "Software Engineering with Placement (BEng)",
    school: "Queen's University Belfast",
    location: "Belfast, UK",
    startDate: "Sept '17",
    endDate: "Jun '21",
    tags: ["Object Oriented Programming", "Databases", "Software Testing", "Video Analytics and Machine Learning"],
  }

  const [personalInfo, setPersonalInfo] = useState(exampleData);

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  const addTag = (newTag) => {
    if (!personalInfo.tags.includes(newTag) && personalInfo.tags.length < 4) {
      setPersonalInfo({ ...personalInfo, tags: [...personalInfo.tags, newTag] });
    }
  };

  const removeTag = (tagIndex) => {
    setPersonalInfo({
      ...personalInfo,
      tags: personalInfo.tags.filter((_, index) => index !== tagIndex),
    });
  };

  return (
      <div className="app">
        <div className="CvForm">
        <button className="button" onClick={() => 
          setPersonalInfo({
            fullName: "",
            jobTitle: "",
            email: "",
            phoneNumber: "",
            github: "",
            degree: "",
            school: "",
            location: "",
            startDate: "",
            endDate: "", 
            tags: [], 
          })
        }>Clear</button>
        <button className="button" onClick={() => 
          setPersonalInfo(exampleData)
        }>Load Example Data</button>
          <PersonalDetails
            onChange={handlePersonalInfoChange}
            fullName={personalInfo.fullName}
            jobTitle={personalInfo.jobTitle}
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
            tags={personalInfo.tags} 
            addTag={addTag} 
            removeTag={removeTag}
          />
        </div>
        <Resume 
        personalDetails={personalInfo}
        />
      </div>
  );
}

export default App;
