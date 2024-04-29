import { useState } from 'react';
import './App.css';
import Resume from './components/Resume.jsx';
import PersonalDetails from "./components/PersonalDetails";
import EducationDetails from "./components/EducationDetails";
{/*import WorkDetails from "./components/WorkDetails";*/}
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {

  const exampleData = {
    fullName: "Nathan Joel",
    jobTitle: "Software Engineer",
    email: "nathanjoeldev@gmail.com",
    phoneNumber: "+44 7519 197540",
    github: "NafanJ",
    school: "Queen's University Belfast",
    degree: "Software Engineering with Placement (BEng)",
    classification: "First Class Honours",
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

  const exportPDF = () => {
    const input = document.querySelector('#root > div > div.resume-container'); // Ensure this selector targets your Resume component correctly
    if (input) {
      html2canvas(input, { scale: 2 }) // Higher scale for better resolution
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');

          // Set up PDF dimensions
          const pdfWidth = 210; // A4 width in mm
          const pdfHeight = 297; // A4 height in mm
          const canvasAspectRatio = canvas.width / canvas.height;
          const pdfAspectRatio = pdfWidth / pdfHeight;

          let finalPdfWidth, finalPdfHeight;
          if (canvasAspectRatio < pdfAspectRatio) {
            finalPdfHeight = pdfHeight;
            finalPdfWidth = pdfHeight * canvasAspectRatio;
          } else {
            finalPdfWidth = pdfWidth;
            finalPdfHeight = pdfWidth / canvasAspectRatio;
          }

          // Creating a new PDF with the calculated dimensions
          const pdf = new jsPDF({
            orientation: finalPdfWidth > finalPdfHeight ? 'landscape' : 'portrait',
            unit: 'mm',
            format: [finalPdfWidth, finalPdfHeight]
          });

          // Calculating position to center the image (if necessary)
          const x = (pdf.internal.pageSize.getWidth() - finalPdfWidth) / 2;
          const y = (pdf.internal.pageSize.getHeight() - finalPdfHeight) / 2;

          pdf.addImage(imgData, 'PNG', x, y, finalPdfWidth, finalPdfHeight);
          pdf.save(`${personalInfo.fullName} CV.pdf`);
        })
        .catch(err => {
          console.error('Error exporting PDF', err);
        });
    } else {
      console.error('The resume container was not found.');
    }
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
            classification: "",
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
        <button className="button" onClick={exportPDF}>Export to PDF</button>
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
          classification={personalInfo.classification}
          startDate={personalInfo.startDate}
          endDate={personalInfo.endDate}
          location={personalInfo.location}
          tags={personalInfo.tags}
          addTag={addTag}
          removeTag={removeTag}
        />
        {/*<WorkDetails 
          onChange={handlePersonalInfoChange}
      />*/}
      </div>
      <Resume
        personalDetails={personalInfo}
      />
    </div>
  );
}

export default App;
