import PersonalDetailsSection from './PersonalDetailsSection.jsx'
import EducationDetailsSection from './EducationDetailsSection.jsx'
import "../styles/Resume.css";

function Resume(personalInfo, educationDetails, professionalExperience) {
    return (
    <div className="resume-container">
        <PersonalDetailsSection
            fullName={personalInfo.personalDetails.fullName}
            jobTitle={personalInfo.personalDetails.jobTitle}
            email={personalInfo.personalDetails.email}
            phoneNumber={personalInfo.personalDetails.phoneNumber}
            github={personalInfo.personalDetails.github}
        />
        <EducationDetailsSection
            school={personalInfo.personalDetails.school}
            degree={personalInfo.personalDetails.degree}
            classification={personalInfo.personalDetails.classification}
            startDate={personalInfo.personalDetails.startDate}
            endDate={personalInfo.personalDetails.endDate}
            location={personalInfo.personalDetails.location}
            tags={personalInfo.personalDetails.tags}
        />
    </div>
    );
}

export default Resume